/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(38);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(114),
    getValue = __webpack_require__(117);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(36),
    baseKeys = __webpack_require__(98),
    isArrayLike = __webpack_require__(12);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(92),
    objectToString = __webpack_require__(93);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(77)
/* template */
var __vue_template__ = __webpack_require__(81)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/PluginGrid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-779071c0", Component.options)
  } else {
    hotAPI.reload("data-v-779071c0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(42),
    isLength = __webpack_require__(24);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(104),
    listCacheDelete = __webpack_require__(105),
    listCacheGet = __webpack_require__(106),
    listCacheHas = __webpack_require__(107),
    listCacheSet = __webpack_require__(108);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(27);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(126);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(60),
    baseAssignValue = __webpack_require__(61);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);



/* harmony default export */ __webpack_exports__["a"] = ({
    createCart: function createCart(data, cb, errorCb) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(Craft.getActionUrl('plugin-store/create-cart'), data, {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        }).then(function (response) {
            return cb(response.data);
        }).catch(function (response) {
            return errorCb(response);
        });
    },
    updateCart: function updateCart(orderNumber, data, cb, errorCb) {
        data.orderNumber = orderNumber;

        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(Craft.getActionUrl('plugin-store/update-cart'), data, {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        }).then(function (response) {
            return cb(response.data);
        }).catch(function (response) {
            return errorCb(response);
        });
    },
    resetOrderNumber: function resetOrderNumber() {
        localStorage.removeItem('orderNumber');
    },
    saveOrderNumber: function saveOrderNumber(orderNumber) {
        localStorage.setItem('orderNumber', orderNumber);
    },
    getOrderNumber: function getOrderNumber(cb) {
        var orderNumber = localStorage.getItem('orderNumber');

        return cb(orderNumber);
    },
    getCart: function getCart(orderNumber, cb, errorCb) {
        var data = {
            orderNumber: orderNumber
        };

        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Craft.getActionUrl('plugin-store/get-cart', data)).then(function (response) {
            return cb(response.data);
        }).catch(function (response) {
            return errorCb(response);
        });
    },
    getDeveloper: function getDeveloper(developerId, cb, errorCb) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Craft.getActionUrl('plugin-store/developer'), {
            params: {
                developerId: developerId
            },
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        }).then(function (response) {
            return cb(response.data);
        }).catch(function (response) {
            return errorCb(response);
        });
    },
    getPluginStoreData: function getPluginStoreData(cb, errorCb) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Craft.getActionUrl('plugin-store/plugin-store-data'), '', {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        }).then(function (response) {
            return cb(response.data);
        }).catch(function (response) {
            return errorCb(response);
        });
    },
    getPluginDetails: function getPluginDetails(pluginId, cb, errorCb) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Craft.getActionUrl('plugin-store/plugin-details'), {
            params: {
                pluginId: pluginId
            },
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        }).then(function (response) {
            var pluginDetails = response.data;
            return cb(pluginDetails);
        }).catch(function (response) {
            return errorCb(response);
        });
    },
    getCraftData: function getCraftData(cb, cbError) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Craft.getActionUrl('plugin-store/craft-data')).then(function (response) {
            var craftData = response.data;
            return cb(craftData);
        }).catch(function (response) {
            return cbError(response);
        });
    },
    checkout: function checkout(data) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(Craft.getActionUrl('plugin-store/checkout'), data, {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        });
    },
    savePluginLicenseKeys: function savePluginLicenseKeys(data) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(Craft.getActionUrl('plugin-store/save-plugin-license-keys'), data, {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        });
    },
    tryEdition: function tryEdition(edition) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(Craft.getActionUrl('app/try-edition'), 'edition=' + edition, {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue
            }
        });
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RECEIVE_DEVELOPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RECEIVE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RECEIVE_PLUGIN_STORE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RECEIVE_CRAFT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_CRAFT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RECEIVE_PLUGIN_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_IDENTITY_MODE; });
var RECEIVE_DEVELOPER = 'RECEIVE_DEVELOPER';
var RECEIVE_CART = 'RECEIVE_CART';
var RECEIVE_PLUGIN_STORE_DATA = 'RECEIVE_PLUGIN_STORE_DATA';
var RECEIVE_CRAFT_DATA = 'RECEIVE_CRAFT_DATA';
var UPDATE_CRAFT_ID = 'UPDATE_CRAFT_ID';
var CHECKOUT = 'CHECKOUT';
var RESET_CART = 'RESET_CART';
var RECEIVE_PLUGIN_DETAILS = 'RECEIVE_PLUGIN_DETAILS';
var CHANGE_IDENTITY_MODE = 'CHANGE_IDENTITY_MODE';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(94);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(13),
    stackClear = __webpack_require__(109),
    stackDelete = __webpack_require__(110),
    stackGet = __webpack_require__(111),
    stackHas = __webpack_require__(112),
    stackSet = __webpack_require__(113);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(118),
    mapCacheDelete = __webpack_require__(125),
    mapCacheGet = __webpack_require__(127),
    mapCacheHas = __webpack_require__(128),
    mapCacheSet = __webpack_require__(129);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(35),
    stubArray = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(17);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(46);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(254)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/inputs/TextInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7360f81e", Component.options)
  } else {
    hotAPI.reload("data-v-7360f81e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(82)
/* template */
var __vue_template__ = __webpack_require__(171)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/PluginSearch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f67cabc", Component.options)
  } else {
    hotAPI.reload("data-v-7f67cabc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(89),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(22),
    isIndex = __webpack_require__(39),
    isTypedArray = __webpack_require__(40);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(90),
    isObjectLike = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(95),
    baseUnary = __webpack_require__(96),
    nodeUtil = __webpack_require__(97);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(130),
    isObjectLike = __webpack_require__(8);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(131),
    arraySome = __webpack_require__(134),
    cacheHas = __webpack_require__(135);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(50),
    getSymbols = __webpack_require__(30),
    keys = __webpack_require__(6);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(51),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(138),
    Map = __webpack_require__(28),
    Promise = __webpack_require__(139),
    Set = __webpack_require__(140),
    WeakMap = __webpack_require__(141),
    baseGetTag = __webpack_require__(7),
    toSource = __webpack_require__(43);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(57),
    toKey = __webpack_require__(18);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(31),
    stringToPath = __webpack_require__(145),
    toString = __webpack_require__(148);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(175)
/* template */
var __vue_template__ = __webpack_require__(201)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/PluginIndex.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00a9b7c8", Component.options)
  } else {
    hotAPI.reload("data-v-00a9b7c8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(61),
    eq = __webpack_require__(27);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(179);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(36),
    baseKeysIn = __webpack_require__(182),
    isArrayLike = __webpack_require__(12);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(51),
    getPrototype = __webpack_require__(64),
    getSymbols = __webpack_require__(30),
    stubArray = __webpack_require__(52);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(41);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(255)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/fields/TextField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c775a1e", Component.options)
  } else {
    hotAPI.reload("data-v-3c775a1e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(274);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_currency__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_craft__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('currency', __WEBPACK_IMPORTED_MODULE_1__filters_currency__["a" /* currency */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('escapeHtml', __WEBPACK_IMPORTED_MODULE_2__filters_craft__["a" /* escapeHtml */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('formatNumber', __WEBPACK_IMPORTED_MODULE_2__filters_craft__["b" /* formatNumber */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('t', __WEBPACK_IMPORTED_MODULE_2__filters_craft__["c" /* t */]);

Garnish.$doc.ready(function () {
    Craft.initUiElements();

    window.pluginStoreApp = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
        el: '#content',
        router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
        store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],

        components: {
            GlobalModal: __webpack_require__(233)
        },

        data: function data() {
            return {
                $crumbs: null,
                $pageTitle: null,
                crumbs: null,
                pageTitle: 'Plugin Store',
                plugin: null,
                pluginId: null,
                modalStep: null,
                pluginStoreDataLoaded: false,
                pluginStoreDataError: false,
                craftIdDataLoaded: false,
                cartDataLoaded: false,
                showModal: false,
                lastOrder: null,
                statusMessage: null
            };
        },


        computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["mapGetters"])({
            cart: 'cart',
            craftIdAccount: 'craftIdAccount'
        })),

        watch: {
            cart: function cart() {
                var totalQty = 0;

                if (this.cart) {
                    totalQty = this.cart.totalQty;
                }

                $('.badge', this.$cartButton).html(totalQty);
            },
            crumbs: function crumbs(_crumbs) {
                var _this = this;

                // Remove existing crumbs
                $('nav', this.$crumbs).remove();

                if (_crumbs && _crumbs.length > 0) {
                    (function () {
                        _this.$crumbs.removeClass('empty');

                        // Create new crumbs
                        var crumbsNav = $('<nav></nav>');
                        var crumbsUl = $('<ul></ul>').appendTo(crumbsNav);
                        var crumbsLi = $('<li></li>').appendTo(crumbsUl);

                        // Add crumb items
                        var $this = _this;

                        var _loop = function _loop(i) {
                            var item = _crumbs[i];
                            var link = $('<a href="#" data-path="' + item.path + '">' + item.label + '</a>').appendTo(crumbsLi);

                            link.on('click', function (e) {
                                e.preventDefault();
                                $this.$router.push({ path: item.path });
                            });
                        };

                        for (var i = 0; i < _crumbs.length; i++) {
                            _loop(i);
                        }

                        crumbsNav.appendTo(_this.$crumbs);
                    })();
                } else {
                    this.$crumbs.addClass('empty');
                }
            },
            pageTitle: function pageTitle(_pageTitle) {
                this.$pageTitle.html(_pageTitle);
            },
            craftIdAccount: function craftIdAccount() {
                if (this.craftIdAccount) {
                    $('.label', this.$craftIdAccount).html(this.craftIdAccount.username);

                    this.$craftIdAccount.removeClass('hidden');
                    this.$craftIdConnectForm.addClass('hidden');
                    this.$craftIdDisconnectForm.removeClass('hidden');
                } else {
                    this.$craftIdAccount.addClass('hidden');
                    this.$craftIdConnectForm.removeClass('hidden');
                    this.$craftIdDisconnectForm.addClass('hidden');
                }
            }
        },

        methods: {
            displayNotice: function displayNotice(message) {
                Craft.cp.displayNotice(message);
            },
            displayError: function displayError(message) {
                Craft.cp.displayError(message);
            },
            showPlugin: function showPlugin(plugin) {
                this.plugin = plugin;
                this.pluginId = plugin.id;
                this.openGlobalModal('plugin-details');
            },
            openGlobalModal: function openGlobalModal(modalStep) {
                this.modalStep = modalStep;

                this.showModal = true;
            },
            closeGlobalModal: function closeGlobalModal() {
                this.showModal = false;
            },
            updateCraftId: function updateCraftId(craftId) {
                this.$store.dispatch('updateCraftId', { craftId: craftId });
                this.$emit('craftIdUpdated');
            }
        },

        created: function created() {
            var _this2 = this;

            // Crumbs
            this.$crumbs = $('#crumbs');

            // Page title
            this.$pageTitle = $('#header').find('h1');

            if (this.$pageTitle) {
                this.$pageTitle.html(this.pageTitle);
            }

            // Plugin Store actions
            this.$pluginStoreActions = $('#pluginstore-actions');
            this.$pluginStoreActionsSpinner = $('#pluginstore-actions-spinner');

            // Craft ID account
            this.$craftIdAccount = $('#craftid-account');

            // Connect form
            this.$craftIdConnectForm = $('#craftid-connect-form');

            // Disconnect form
            this.$craftIdDisconnectForm = $('#craftid-disconnect-form');

            // On data loaded
            this.$on('dataLoaded', function () {
                if (this.pluginStoreDataLoaded && (!this.craftIdDataLoaded || !this.cartDataLoaded)) {
                    this.$pluginStoreActionsSpinner.removeClass('hidden');
                }

                if (this.pluginStoreDataLoaded && this.craftIdDataLoaded && this.cartDataLoaded) {
                    // All data loaded
                    this.$pluginStoreActions.removeClass('hidden');
                    this.$pluginStoreActionsSpinner.addClass('hidden');
                    this.$emit('allDataLoaded');
                }
            }.bind(this));

            // Load Plugin Store data
            this.$store.dispatch('getPluginStoreData').then(function (data) {
                _this2.pluginStoreDataLoaded = true;
                _this2.$emit('dataLoaded');
            }).catch(function (response) {
                _this2.pluginStoreDataError = true;
                _this2.statusMessage = _this2.$options.filters.t('The Plugin Store is not available, please try again later.', 'app');
            });

            // Load Craft data
            this.$store.dispatch('getCraftData').then(function (data) {
                _this2.craftIdDataLoaded = true;
                _this2.$emit('dataLoaded');

                // Load cart
                _this2.$store.dispatch('getCart').then(function () {
                    _this2.cartDataLoaded = true;
                    _this2.$emit('dataLoaded');
                });
            }).catch(function (response) {
                _this2.craftIdDataLoaded = true;
            });
        },
        mounted: function mounted() {
            this.pageTitle = this.$options.filters.t("Plugin Store", 'app');
            this.statusMessage = this.$options.filters.t("Loading Plugin Store…", 'app');

            var $this = this;

            // Cart button
            this.$cartButton = $('#cart-button');

            this.$cartButton.on('click', function (e) {
                e.preventDefault();
                $this.openGlobalModal('cart');
            });

            this.$cartButton.keydown(function (e) {
                switch (e.which) {
                    case 13: // Enter
                    case 32:
                        // Space
                        e.preventDefault();
                        $this.openGlobalModal('cart');
                        break;

                }
            });
        }
    });
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = currency;
var digitsRE = /(\d{3})(?=\d)/g;

function currency(value, currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) {
        return '';
    }
    currency = currency != null ? currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = escapeHtml;
/* harmony export (immutable) */ __webpack_exports__["c"] = t;
/* harmony export (immutable) */ __webpack_exports__["b"] = formatNumber;
function escapeHtml(str) {
    return Craft.escapeHtml(str);
}

function t(message, category, params) {
    return Craft.t(category, message, params);
}

function formatNumber(number) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',.0f';

    return Craft.formatNumber(number, format);
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Index__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Category__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Category___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_Category__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_UpgradeCraft__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_UpgradeCraft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_UpgradeCraft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Developer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Developer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_Developer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_FeaturedPlugins__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_FeaturedPlugins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pages_FeaturedPlugins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Tests__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Tests___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_Tests__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_NotFound__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_NotFound___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__pages_NotFound__);










__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    base: window.pluginStoreAppBaseUrl,
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Index',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_Index___default.a
    }, {
        path: '/categories/:id',
        name: 'Category',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_Category___default.a
    }, {
        path: '/upgrade-craft',
        name: 'UpgradeCraft',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_UpgradeCraft___default.a
    }, {
        path: '/developer/:id',
        name: 'Developer',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_Developer___default.a
    }, {
        path: '/featured/:id',
        name: 'FeaturedPlugins',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_FeaturedPlugins___default.a
    }, {
        path: '/tests',
        name: 'Tests',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_Tests___default.a
    }, {
        path: '*',
        name: 'NotFound',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_NotFound___default.a
    }]
}));

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(76)
/* template */
var __vue_template__ = __webpack_require__(172)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e4dbf95", Component.options)
  } else {
    hotAPI.reload("data-v-6e4dbf95", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginGrid: __webpack_require__(11),
        PluginSearch: __webpack_require__(34)
    },

    data: function data() {
        return {
            showingSearchResults: false,
            showCategorySelector: false
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        allPlugins: 'allPlugins',
        pluginStoreData: 'pluginStoreData',
        activeTrialPlugins: 'activeTrialPlugins',
        pluginStoreGetAllCategories: 'pluginStoreGetAllCategories',
        getAllCategories: 'getAllCategories',
        getPluginsByIds: 'getPluginsByIds',
        installedPlugins: 'installedPlugins'
    }), {
        indexBlocks: function indexBlocks() {
            return this.pluginStoreData.indexBlocks;
        }
    }),

    created: function created() {
        this.$root.pageTitle = this.$options.filters.t("Plugin Store", 'app');
    },
    mounted: function mounted() {
        this.$root.crumbs = null;
    }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginCard: __webpack_require__(78)
    },

    props: ['plugins', 'columns'],

    computed: {
        cssClass: function cssClass() {
            var cssClass = 'ps-grid-plugins';

            if (this.columns) {
                cssClass += ' ps-grid-plugins-' + this.columns;
            }

            return cssClass;
        }
    },

    methods: {
        showPlugin: function showPlugin(plugin) {
            this.$root.showPlugin(plugin);
        }
    }

});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(79)
/* template */
var __vue_template__ = __webpack_require__(80)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/PluginCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-641d6c8a", Component.options)
  } else {
    hotAPI.reload("data-v-641d6c8a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['plugin'],

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        isInstalled: 'isInstalled'
    }))

});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.plugin
    ? _c(
        "div",
        {
          staticClass: "plugin-card",
          on: {
            click: function($event) {
              _vm.$emit("click")
            }
          }
        },
        [
          _c("div", { staticClass: "plugin-icon" }, [
            _vm.plugin.iconUrl
              ? _c("img", { attrs: { src: _vm.plugin.iconUrl, height: "32" } })
              : _c("div", { staticClass: "default-icon" })
          ]),
          _vm._v(" "),
          _c("div", [
            _c("strong", [_vm._v(_vm._s(_vm.plugin.name))]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.plugin.shortDescription))]),
            _vm._v(" "),
            _vm.plugin.editions[0].price != "0.00"
              ? _c("p", { staticClass: "light" }, [
                  _vm._v(
                    _vm._s(_vm._f("currency")(_vm.plugin.editions[0].price))
                  )
                ])
              : _c("p", { staticClass: "light" }, [_vm._v("Free")]),
            _vm._v(" "),
            _vm.isInstalled(_vm.plugin)
              ? _c("div", {
                  staticClass: "installed",
                  attrs: { "data-icon": "check" }
                })
              : _vm._e()
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-641d6c8a", module.exports)
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.plugins && _vm.plugins.length > 0
      ? _c(
          "div",
          { class: _vm.cssClass },
          _vm._l(_vm.plugins, function(plugin) {
            return _c(
              "div",
              { staticClass: "ps-grid-box" },
              [
                _c("plugin-card", {
                  attrs: { plugin: plugin },
                  on: {
                    click: function($event) {
                      _vm.showPlugin(plugin)
                    }
                  }
                })
              ],
              1
            )
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-779071c0", module.exports)
  }
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_includes__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginGrid: __webpack_require__(11),
        SortMenuBtn: __webpack_require__(168)
    },

    props: ['plugins', 'sort'],

    data: function data() {
        return {
            searchQuery: '',
            showSpinner: false,

            selectedAttribute: null,
            selectedDirection: null,

            sortMenuBtnAttributes: null
        };
    },


    computed: {
        pluginsToRender: function pluginsToRender() {
            var self = this;

            var searchQuery = this.searchQuery;

            if (!searchQuery) {
                this.$emit('hideResults');
                return [];
            }

            this.$emit('showResults');

            return __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default()(this.plugins, function (o) {
                if (o.packageName && __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.packageName.toLowerCase(), searchQuery.toLowerCase())) {
                    return true;
                }

                if (o.name && __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.name.toLowerCase(), searchQuery.toLowerCase())) {
                    return true;
                }

                if (o.shortDescription && __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.shortDescription.toLowerCase(), searchQuery.toLowerCase())) {
                    return true;
                }

                if (o.description && __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.description.toLowerCase(), searchQuery.toLowerCase())) {
                    return true;
                }

                if (o.developerName && __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.developerName.toLowerCase(), searchQuery.toLowerCase())) {
                    return true;
                }

                if (o.developerUrl && __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.developerUrl.toLowerCase(), searchQuery.toLowerCase())) {
                    return true;
                }

                if (o.keywords.length > 0) {
                    for (var i = 0; i < o.keywords.length; i++) {
                        if (__WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(o.keywords[i].toLowerCase(), searchQuery.toLowerCase())) {
                            return true;
                        }
                    }
                }
            });
        }
    },

    mounted: function mounted() {
        this.sortMenuBtnAttributes = {
            activeInstalls: this.$options.filters.t("Popularity", 'app'),
            lastUpdate: this.$options.filters.t("Last Update", 'app'),
            name: this.$options.filters.t("Name", 'app'),
            price: this.$options.filters.t("Price", 'app')
        };
    }
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(35),
    baseFilter = __webpack_require__(84),
    baseIteratee = __webpack_require__(101),
    isArray = __webpack_require__(2);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(85);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(86),
    createBaseEach = __webpack_require__(100);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(87),
    keys = __webpack_require__(6);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(88);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(24),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(38);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(25),
    nativeKeys = __webpack_require__(99);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(41);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(12);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(102),
    baseMatchesProperty = __webpack_require__(143),
    identity = __webpack_require__(153),
    isArray = __webpack_require__(2),
    property = __webpack_require__(154);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(103),
    getMatchData = __webpack_require__(142),
    matchesStrictComparable = __webpack_require__(55);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(26),
    baseIsEqual = __webpack_require__(44);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(13);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(13),
    Map = __webpack_require__(28),
    MapCache = __webpack_require__(29);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(42),
    isMasked = __webpack_require__(115),
    isObject = __webpack_require__(4),
    toSource = __webpack_require__(43);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(116);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(119),
    ListCache = __webpack_require__(13),
    Map = __webpack_require__(28);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(120),
    hashDelete = __webpack_require__(121),
    hashGet = __webpack_require__(122),
    hashHas = __webpack_require__(123),
    hashSet = __webpack_require__(124);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(26),
    equalArrays = __webpack_require__(45),
    equalByTag = __webpack_require__(136),
    equalObjects = __webpack_require__(137),
    getTag = __webpack_require__(53),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(22),
    isTypedArray = __webpack_require__(40);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(29),
    setCacheAdd = __webpack_require__(132),
    setCacheHas = __webpack_require__(133);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    Uint8Array = __webpack_require__(46),
    eq = __webpack_require__(27),
    equalArrays = __webpack_require__(45),
    mapToArray = __webpack_require__(47),
    setToArray = __webpack_require__(48);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(49);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(54),
    keys = __webpack_require__(6);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(44),
    get = __webpack_require__(144),
    hasIn = __webpack_require__(150),
    isKey = __webpack_require__(31),
    isStrictComparable = __webpack_require__(54),
    matchesStrictComparable = __webpack_require__(55),
    toKey = __webpack_require__(18);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(56);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(146);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(147);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(29);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(149);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    arrayMap = __webpack_require__(58),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(151),
    hasPath = __webpack_require__(152);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(57),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(2),
    isIndex = __webpack_require__(39),
    isLength = __webpack_require__(24),
    toKey = __webpack_require__(18);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(155),
    basePropertyDeep = __webpack_require__(156),
    isKey = __webpack_require__(31),
    toKey = __webpack_require__(18);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(56);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(158),
    isArrayLike = __webpack_require__(12),
    isString = __webpack_require__(162),
    toInteger = __webpack_require__(163),
    values = __webpack_require__(166);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(159),
    baseIsNaN = __webpack_require__(160),
    strictIndexOf = __webpack_require__(161);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isArray = __webpack_require__(2),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(164);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(165);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(167),
    keys = __webpack_require__(6);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(58);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(169)
/* template */
var __vue_template__ = __webpack_require__(170)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/SortMenuBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77856930", Component.options)
  } else {
    hotAPI.reload("data-v-77856930", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['attributes', 'value'],

    data: function data() {
        return {
            defaultDirection: 'asc',
            directions: null
        };
    },


    computed: {
        menuLabel: function menuLabel() {
            if (this.attributes) {
                return this.attributes[this.value.attribute];
            }
        }
    },

    methods: {
        selectAttribute: function selectAttribute(attribute) {
            this.$emit('update:value', { attribute: attribute, direction: this.value.direction });
        },
        selectDirection: function selectDirection(direction) {
            this.$emit('update:value', { attribute: this.value.attribute, direction: direction });
        }
    },

    mounted: function mounted() {
        this.directions = {
            asc: this.$options.filters.t("Ascending", 'app'),
            desc: this.$options.filters.t("Descending", 'app')
        };

        if (!this.value.direction) {
            this.$emit('update:value', {
                attribute: this.value.attribute,
                direction: this.defaultDirection
            });
        }

        Craft.initUiElements();
    }
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "btn menubtn sortmenubtn",
        attrs: { "data-icon": _vm.value.direction }
      },
      [_vm._v(_vm._s(_vm.menuLabel))]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "menu" }, [
      _c(
        "ul",
        { staticClass: "padded sort-attributes" },
        _vm._l(_vm.attributes, function(label, key) {
          return _c("li", [
            _c(
              "a",
              {
                class: { sel: _vm.value.attribute == key },
                on: {
                  click: function($event) {
                    _vm.selectAttribute(key)
                  }
                }
              },
              [_vm._v(_vm._s(label))]
            )
          ])
        })
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "padded sort-directions" },
        _vm._l(_vm.directions, function(label, key) {
          return _c("li", [
            _c(
              "a",
              {
                class: { sel: _vm.value.direction == key },
                on: {
                  click: function($event) {
                    _vm.selectDirection(key)
                  }
                }
              },
              [_vm._v(_vm._s(label))]
            )
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77856930", module.exports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "toolbar" }, [
        _c(
          "div",
          { staticClass: "flex" },
          [
            _c(
              "div",
              { staticClass: "flex-grow texticon search icon clearable" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  staticClass: "text fullwidth",
                  attrs: {
                    id: "searchQuery",
                    name: "searchQuery",
                    type: "text",
                    placeholder: _vm._f("t")("Search plugins", "app")
                  },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "clear",
                  class: { hidden: _vm.searchQuery.length == 0 },
                  attrs: { title: "Clear" },
                  on: {
                    click: function($event) {
                      _vm.searchQuery = ""
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm.sort
              ? [
                  _c("sort-menu-btn", {
                    attrs: {
                      attributes: _vm.sortMenuBtnAttributes,
                      value: _vm.sort
                    },
                    on: {
                      "update:value": function(val) {
                        return _vm.$emit("update:sort", val)
                      }
                    }
                  })
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("div", {
              staticClass: "spinner",
              class: { invisible: !_vm.showSpinner }
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("plugin-grid", { attrs: { plugins: _vm.pluginsToRender, columns: 4 } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f67cabc", module.exports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("plugin-search", {
        attrs: { plugins: _vm.allPlugins },
        on: {
          showResults: function($event) {
            _vm.showingSearchResults = true
          },
          hideResults: function($event) {
            _vm.showingSearchResults = false
          }
        }
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "category-selector-btn",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.showCategorySelector = !_vm.showCategorySelector
            }
          }
        },
        [_vm._v("All categories")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "category-selector",
          class: { hidden: !_vm.showCategorySelector }
        },
        [
          _c("div", { staticClass: "category-selector-header" }, [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.showCategorySelector = false
                  }
                }
              },
              [_vm._v("Hide categories")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "category-selector-body" }, [
            _c(
              "ul",
              { staticClass: "categories" },
              [
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "/upgrade-craft" } }, [
                      _c("img", {
                        attrs: {
                          src:
                            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Y3JhZnQ8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJjcmFmdCI+ICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0RBNUE0NyIgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIj48L2NpcmNsZT4gICAgICAgICAgICA8cGF0aCBkPSJNNjUuMTMxNDQwNCwzNC4yNjI5Njc5IEM2NS40MTUyMjQxLDM0LjQ3NTEzMDEgNjUuNjgyNzkxNywzNC42OTk0NTQ0IDY1Ljk0NDk1MzksMzQuOTI3ODMyOCBMNzAuMTgyNzkxNywzMS42MzA1MzU1IEw3MC4zMTUyMjQxLDMxLjQ2MDI2NTIgQzY5LjY2MDE5NjUsMzAuODAwOTk5IDY4Ljk1ODM2NzUsMzAuMTg5OTQ3IDY4LjIxNTIyNDEsMjkuNjMxODg2OSBDNTguNDg5NTQ4NSwyMi4zNTQ4NTk4IDQzLjc5MjI1MTIsMjUuNDAwODA1OCAzNS4zODgxOTcxLDM2LjQzNTk0MDkgQzI2Ljk4OTU0ODUsNDcuNDY5NzI0NyAyOC4wNjM4NzI4LDYyLjMxMDI2NTIgMzcuNzg4MTk3MSw2OS41ODk5OTUgQzQ1LjczMDA4OSw3NS41MzA1MzU1IDU2Ljk4Mjc5MTcsNzQuNTg3MjkyMyA2NS40MTkyNzgyLDY4LjAzNTk0MDkgTDY1LjQxMjUyMTQsNjguMDE5NzI0NyBMNjEuMzc3Mzg2Myw2NC44ODQ1ODk2IEM1NS4xMjQ2ODM2LDY4Ljg2ODM3MzMgNDcuMzY5Mjc4Miw2OS4xNTQ4NTk4IDQxLjc1ODQ2NzQsNjQuOTU3NTYyNSBDMzQuMjg1NDk0NCw1OS4zNjgzNzMzIDMzLjQ2MTE3MDEsNDcuOTY1NjcwNiAzOS45MTY1NzU1LDM5LjQ4OTk5NSBDNDYuMzY5Mjc4MiwzMS4wMTI5Njc5IDU3LjY1OTgxODcsMjguNjczNzc4OCA2NS4xMzAwODksMzQuMjYyOTY3OSBMNjUuMTMxNDQwNCwzNC4yNjI5Njc5IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4="
                        }
                      }),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm._f("t")("Upgrade Craft CMS", "app")) +
                          "\n                    "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.getAllCategories(), function(category) {
                  return _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/categories/" + category.id } },
                        [
                          _c("img", { attrs: { src: category.iconUrl } }),
                          _vm._v(
                            "\n                        " +
                              _vm._s(category.title) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      !_vm.showingSearchResults
        ? _c("div", { staticClass: "ps-grid-wrapper has-sidebar" }, [
            _c("div", { staticClass: "ps-grid-sidebar categories-wrapper" }, [
              _c("h2", [_vm._v(_vm._s(_vm._f("t")("Categories", "app")))]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "categories" },
                [
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/upgrade-craft" } }, [
                        _c("img", {
                          attrs: {
                            src:
                              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Y3JhZnQ8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJjcmFmdCI+ICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0RBNUE0NyIgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIj48L2NpcmNsZT4gICAgICAgICAgICA8cGF0aCBkPSJNNjUuMTMxNDQwNCwzNC4yNjI5Njc5IEM2NS40MTUyMjQxLDM0LjQ3NTEzMDEgNjUuNjgyNzkxNywzNC42OTk0NTQ0IDY1Ljk0NDk1MzksMzQuOTI3ODMyOCBMNzAuMTgyNzkxNywzMS42MzA1MzU1IEw3MC4zMTUyMjQxLDMxLjQ2MDI2NTIgQzY5LjY2MDE5NjUsMzAuODAwOTk5IDY4Ljk1ODM2NzUsMzAuMTg5OTQ3IDY4LjIxNTIyNDEsMjkuNjMxODg2OSBDNTguNDg5NTQ4NSwyMi4zNTQ4NTk4IDQzLjc5MjI1MTIsMjUuNDAwODA1OCAzNS4zODgxOTcxLDM2LjQzNTk0MDkgQzI2Ljk4OTU0ODUsNDcuNDY5NzI0NyAyOC4wNjM4NzI4LDYyLjMxMDI2NTIgMzcuNzg4MTk3MSw2OS41ODk5OTUgQzQ1LjczMDA4OSw3NS41MzA1MzU1IDU2Ljk4Mjc5MTcsNzQuNTg3MjkyMyA2NS40MTkyNzgyLDY4LjAzNTk0MDkgTDY1LjQxMjUyMTQsNjguMDE5NzI0NyBMNjEuMzc3Mzg2Myw2NC44ODQ1ODk2IEM1NS4xMjQ2ODM2LDY4Ljg2ODM3MzMgNDcuMzY5Mjc4Miw2OS4xNTQ4NTk4IDQxLjc1ODQ2NzQsNjQuOTU3NTYyNSBDMzQuMjg1NDk0NCw1OS4zNjgzNzMzIDMzLjQ2MTE3MDEsNDcuOTY1NjcwNiAzOS45MTY1NzU1LDM5LjQ4OTk5NSBDNDYuMzY5Mjc4MiwzMS4wMTI5Njc5IDU3LjY1OTgxODcsMjguNjczNzc4OCA2NS4xMzAwODksMzQuMjYyOTY3OSBMNjUuMTMxNDQwNCwzNC4yNjI5Njc5IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4="
                          }
                        }),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm._f("t")("Upgrade Craft CMS", "app")) +
                            "\n                    "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.getAllCategories(), function(category) {
                    return _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/categories/" + category.id } },
                          [
                            _c("img", { attrs: { src: category.iconUrl } }),
                            _vm._v(
                              "\n                        " +
                                _vm._s(category.title) +
                                "\n                    "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ps-grid-main" },
              [
                _vm.pluginStoreData.featuredPlugins
                  ? [
                      _vm._l(_vm.pluginStoreData.featuredPlugins, function(
                        featuredPlugin
                      ) {
                        return [
                          _c(
                            "router-link",
                            {
                              staticClass: "right",
                              attrs: { to: "/featured/" + featuredPlugin.id }
                            },
                            [_vm._v(_vm._s(_vm._f("t")("See all", "app")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("h2", [_vm._v(_vm._s(featuredPlugin.title))]),
                              _vm._v(" "),
                              _c("plugin-grid", {
                                attrs: {
                                  plugins: _vm.getPluginsByIds(
                                    featuredPlugin.plugins.slice(
                                      0,
                                      featuredPlugin.limit
                                    )
                                  )
                                }
                              })
                            ],
                            1
                          )
                        ]
                      })
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeTrialPlugins.length > 0
                  ? [
                      _c("h2", [
                        _vm._v(_vm._s(_vm._f("t")("Active Trials", "app")))
                      ]),
                      _vm._v(" "),
                      _c("plugin-grid", {
                        attrs: { plugins: _vm.activeTrialPlugins }
                      })
                    ]
                  : _vm._e()
              ],
              2
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e4dbf95", module.exports)
  }
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(174)
/* template */
var __vue_template__ = __webpack_require__(202)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/Category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32488f8b", Component.options)
  } else {
    hotAPI.reload("data-v-32488f8b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginIndex: __webpack_require__(59)
    },

    data: function data() {
        return {
            categoryId: null
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        getCategoryById: 'getCategoryById',
        getPluginsByCategory: 'getPluginsByCategory'
    }), {
        category: function category() {
            var category = this.getCategoryById(this.categoryId);

            if (category) {
                this.$root.pageTitle = category.title;
            }

            return category;
        },
        plugins: function plugins() {
            return this.getPluginsByCategory(this.categoryId);
        }
    }),

    watch: {

        '$route.params.id': function $routeParamsId(id) {
            this.categoryId = id;
        }

    },

    created: function created() {
        this.$root.crumbs = [{
            label: this.$options.filters.t("Plugin Store", 'app'),
            path: '/'
        }];

        this.categoryId = this.$route.params.id;
    }
});

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_clone__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_clone__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginGrid: __webpack_require__(11),
        PluginSearch: __webpack_require__(34)
    },

    props: ['plugins', 'columns'],

    data: function data() {
        return {
            showingSearchResults: false,
            sort: {
                attribute: 'activeInstalls',
                direction: 'desc'
            }
        };
    },


    computed: {
        pluginsToRender: function pluginsToRender() {
            if (!this.plugins) {
                return [];
            }

            var plugins = __WEBPACK_IMPORTED_MODULE_0_lodash_clone___default()(this.plugins);

            var attribute = this.sort.attribute;
            var direction = this.sort.direction;

            function compareASC(a, b) {
                if (a[attribute] < b[attribute]) {
                    return -1;
                }
                if (a[attribute] > b[attribute]) {
                    return 1;
                }
                return 0;
            }

            function compareDESC(a, b) {
                if (a[attribute] > b[attribute]) {
                    return -1;
                }
                if (a[attribute] < b[attribute]) {
                    return 1;
                }
                return 0;
            }

            if (direction === 'desc') {
                plugins.sort(compareDESC);
            } else {
                plugins.sort(compareASC);
            }

            return plugins;
        }
    }

});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(177);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(26),
    arrayEach = __webpack_require__(178),
    assignValue = __webpack_require__(60),
    baseAssign = __webpack_require__(180),
    baseAssignIn = __webpack_require__(181),
    cloneBuffer = __webpack_require__(184),
    copyArray = __webpack_require__(185),
    copySymbols = __webpack_require__(186),
    copySymbolsIn = __webpack_require__(187),
    getAllKeys = __webpack_require__(49),
    getAllKeysIn = __webpack_require__(188),
    getTag = __webpack_require__(53),
    initCloneArray = __webpack_require__(189),
    initCloneByTag = __webpack_require__(190),
    initCloneObject = __webpack_require__(199),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(22),
    isObject = __webpack_require__(4),
    keys = __webpack_require__(6);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(19),
    keys = __webpack_require__(6);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(19),
    keysIn = __webpack_require__(62);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isPrototype = __webpack_require__(25),
    nativeKeysIn = __webpack_require__(183);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(19),
    getSymbols = __webpack_require__(30);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(19),
    getSymbolsIn = __webpack_require__(63);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(50),
    getSymbolsIn = __webpack_require__(63),
    keysIn = __webpack_require__(62);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(32),
    cloneDataView = __webpack_require__(191),
    cloneMap = __webpack_require__(192),
    cloneRegExp = __webpack_require__(194),
    cloneSet = __webpack_require__(195),
    cloneSymbol = __webpack_require__(197),
    cloneTypedArray = __webpack_require__(198);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(32);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(193),
    arrayReduce = __webpack_require__(65),
    mapToArray = __webpack_require__(47);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 193 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(196),
    arrayReduce = __webpack_require__(65),
    setToArray = __webpack_require__(48);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(32);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(200),
    getPrototype = __webpack_require__(64),
    isPrototype = __webpack_require__(25);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("plugin-search", {
        attrs: { plugins: _vm.pluginsToRender, sort: _vm.sort },
        on: {
          showResults: function($event) {
            _vm.showingSearchResults = true
          },
          hideResults: function($event) {
            _vm.showingSearchResults = false
          },
          "update:sort": function($event) {
            _vm.sort = $event
          }
        }
      }),
      _vm._v(" "),
      !_vm.showingSearchResults
        ? _c("plugin-grid", {
            attrs: { plugins: _vm.pluginsToRender, columns: _vm.columns }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00a9b7c8", module.exports)
  }
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.category
    ? _c(
        "div",
        [_c("plugin-index", { attrs: { plugins: _vm.plugins, columns: 4 } })],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32488f8b", module.exports)
  }
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(204)
/* template */
var __vue_template__ = __webpack_require__(211)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/UpgradeCraft.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fa77671", Component.options)
  } else {
    hotAPI.reload("data-v-5fa77671", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        StatusBadge: __webpack_require__(205),
        BuyBtn: __webpack_require__(208)
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        craftData: 'craftData',
        cart: 'cart'
    })),

    created: function created() {
        this.$root.crumbs = [{
            label: this.$options.filters.t("Plugin Store", 'app'),
            path: '/'
        }];

        this.$root.pageTitle = this.$options.filters.t('Upgrade Craft CMS', 'app');
    },
    mounted: function mounted() {
        this.$root.$on('allDataLoaded', function () {
            Craft.initUiElements(this.$refs.upgradecraft);
        }.bind(this));

        Craft.initUiElements(this.$refs.upgradecraft);
    }
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(206)
/* template */
var __vue_template__ = __webpack_require__(207)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/upgradecraft/StatusBadge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e50b326", Component.options)
  } else {
    hotAPI.reload("data-v-5e50b326", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['edition'],

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        craftData: 'craftData'
    }))

});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.craftData.CraftEdition == _vm.edition
        ? [
            _vm.craftData.licensedEdition >= _vm.edition
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "license-status installed",
                      attrs: { "data-icon": "check" }
                    },
                    [_vm._v(_vm._s(_vm._f("t")("Installed", "app")))]
                  )
                ]
              : [
                  _c(
                    "div",
                    {
                      staticClass: "license-status installed",
                      attrs: { "data-icon": "check" }
                    },
                    [_vm._v(_vm._s(_vm._f("t")("Installed as a trial", "app")))]
                  )
                ]
          ]
        : _vm.craftData.licensedEdition == _vm.edition
          ? [
              _c(
                "div",
                {
                  staticClass: "license-status licensed",
                  attrs: { "data-icon": "check" }
                },
                [_vm._v(_vm._s(_vm._f("t")("Licensed", "app")))]
              )
            ]
          : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e50b326", module.exports)
  }
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(209)
/* template */
var __vue_template__ = __webpack_require__(210)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/upgradecraft/BuyBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96cc54ec", Component.options)
  } else {
    hotAPI.reload("data-v-96cc54ec", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['edition', 'edition-handle'],

    data: function data() {
        return {
            loading: false
        };
    },


    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])({
        addToCart: 'addToCart',
        tryEdition: 'tryEdition',
        getCraftData: 'getCraftData'
    }), {
        buyCraft: function buyCraft(edition) {
            var _this = this;

            this.loading = true;

            var item = {
                type: 'cms-edition',
                edition: edition,
                licenseKey: window.cmsLicenseKey,
                autoRenew: false
            };

            this.addToCart([item]).then(function () {
                _this.loading = false;
                _this.$root.openGlobalModal('cart');
            }).catch(function () {
                _this.loading = false;
            });
        },
        installCraft: function installCraft(edition) {
            var _this2 = this;

            this.loading = true;

            this.tryEdition(edition).then(function () {
                _this2.getCraftData().then(function () {
                    _this2.loading = false;
                    _this2.$root.displayNotice("Craft CMS edition changed.");
                });
            }).catch(function () {
                _this2.loading = false;
                _this2.$root.displayError("Couldn’t change Craft CMS edition.");
            });
        }
    }),

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        craftData: 'craftData',
        cart: 'cart',
        isCmsEditionInCart: 'isCmsEditionInCart'
    }))

});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "btngroup" },
    [
      _vm.edition > _vm.craftData.licensedEdition
        ? [
            !_vm.isCmsEditionInCart(_vm.editionHandle)
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "btn submit",
                      on: {
                        click: function($event) {
                          _vm.buyCraft(_vm.editionHandle)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm._f("t")("Buy now", "app")))]
                  )
                ]
              : [
                  _c("div", { staticClass: "btn submit disabled" }, [
                    _vm._v(_vm._s(_vm._f("t")("Added to cart", "app")))
                  ])
                ]
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.craftData.canTestEditions &&
      _vm.edition != _vm.craftData.CraftEdition &&
      _vm.edition > _vm.craftData.licensedEdition
        ? [
            _c(
              "div",
              {
                staticClass: "btn",
                on: {
                  click: function($event) {
                    _vm.installCraft(_vm.editionHandle)
                  }
                }
              },
              [_vm._v(_vm._s(_vm._f("t")("Try for free", "app")))]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.edition == _vm.craftData.licensedEdition &&
      _vm.edition != _vm.craftData.CraftEdition
        ? [
            _c(
              "div",
              {
                staticClass: "btn",
                on: {
                  click: function($event) {
                    _vm.installCraft(_vm.editionHandle)
                  }
                }
              },
              [_vm._v(_vm._s(_vm._f("t")("Reactivate", "app")))]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.loading ? _c("div", { staticClass: "spinner" }) : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-96cc54ec", module.exports)
  }
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.craftData && _vm.cart
    ? _c("div", { ref: "upgradecraft", attrs: { id: "upgrade-craft" } }, [
        _c(
          "div",
          { staticClass: "body", attrs: { id: "upgrade-craft-compare" } },
          [
            _c("table", { staticClass: "data fullwidth" }, [
              _c("thead", [
                _c("tr", { staticClass: "logos" }, [
                  _c("th", [
                    _c("img", {
                      attrs: {
                        src: _vm.craftData.craftLogo,
                        width: "70",
                        height: "70"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [
                    _c("h1", { staticClass: "logo" }, [_vm._v("Solo")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm._f("t")("For personal projects.", "app"))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [
                    _c("h1", { staticClass: "logo" }, [_vm._v("Pro")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(_vm._s(_vm._f("t")("For everything else.", "app")))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "license-statuses" }, [
                  _c("td"),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("status-badge", {
                        attrs: { edition: _vm.craftData.CraftSolo }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("status-badge", {
                        attrs: { edition: _vm.craftData.CraftPro }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "price" }, [
                  _c("th", { staticClass: "feature", attrs: { scope: "row" } }),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm._f("t")("Free", "app")))]),
                  _vm._v(" "),
                  _vm.craftData.editions
                    ? _c("td", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm._f("t")(
                                "{price} plus {renewalPrice}/year for updates",
                                "app",
                                {
                                  price: _vm.$options.filters.currency(
                                    _vm.craftData.editions.pro.price
                                  ),
                                  renewalPrice: _vm.$options.filters.currency(
                                    _vm.craftData.editions.pro.renewalPrice
                                  )
                                }
                              )
                            ) +
                            "\n                "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "buybtns" }, [
                  _c("td"),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("buy-btn", {
                        attrs: {
                          edition: _vm.craftData.CraftSolo,
                          "edition-handle": "solo"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("buy-btn", {
                        attrs: {
                          edition: _vm.craftData.CraftPro,
                          "edition-handle": "pro"
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("th", { staticClass: "group", attrs: { colspan: "3" } }, [
                    _vm._v(_vm._s(_vm._f("t")("Features", "app")))
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [
                      _vm._v(
                        _vm._s(_vm._f("t")("Content Modeling", "app")) + " "
                      ),
                      _c("span", { staticClass: "info" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("t")(
                              "Includes Sections, Global sets, Category groups, Tag groups, Asset volumes, Custom fields, Entry versioning, and Entry drafts",
                              "app"
                            )
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0, false, false),
                  _vm._v(" "),
                  _vm._m(1, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [
                      _vm._v(
                        _vm._s(_vm._f("t")("Multi-site Multi-lingual", "app")) +
                          " "
                      ),
                      _c("span", { staticClass: "info" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("t")(
                              "Includes Multiple locales, Section and entry locale targeting, Content translations",
                              "app"
                            )
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(2, false, false),
                  _vm._v(" "),
                  _vm._m(3, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [
                      _vm._v(
                        _vm._s(_vm._f("t")("Cloud Storage Integration", "app"))
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(4, false, false),
                  _vm._v(" "),
                  _vm._m(5, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [
                      _vm._v(_vm._s(_vm._f("t")("User Accounts", "app")) + " "),
                      _c("span", { staticClass: "info" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("t")(
                              "Includes User accounts, User groups, User permissions, Public user registration",
                              "app"
                            )
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _vm._m(6, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [
                      _vm._v(
                        _vm._s(_vm._f("t")("System Branding", "app")) + " "
                      ),
                      _c("span", { staticClass: "info" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("t")(
                              "Includes Custom login screen logo, Custom site icon, Custom HTML email template, Custom email message wording",
                              "app"
                            )
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _vm._m(7, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { staticClass: "group", attrs: { colspan: "3" } }, [
                    _vm._v(_vm._s(_vm._f("t")("Support", "app")))
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [_vm._v(_vm._s(_vm._f("t")("Security & Bug Fixes", "app")))]
                  ),
                  _vm._v(" "),
                  _vm._m(8, false, false),
                  _vm._v(" "),
                  _vm._m(9, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [
                      _vm._v(
                        _vm._s(
                          _vm._f("t")(
                            "Community Support (Slack, Stack Exchange)",
                            "app"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(10, false, false),
                  _vm._v(" "),
                  _vm._m(11, false, false)
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "feature", attrs: { scope: "row" } },
                    [_vm._v(_vm._s(_vm._f("t")("Developer Support", "app")))]
                  ),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _vm._m(12, false, false)
                ])
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", { attrs: { "data-icon": "check" } })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5fa77671", module.exports)
  }
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(213)
/* template */
var __vue_template__ = __webpack_require__(214)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/Developer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa3a95e6", Component.options)
  } else {
    hotAPI.reload("data-v-aa3a95e6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            plugins: [],
            loading: false
        };
    },


    components: {
        PluginIndex: __webpack_require__(59)
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        developer: 'developer'
    })),

    mounted: function mounted() {
        var _this = this;

        var developerId = this.$route.params.id;

        this.loading = true;

        this.plugins = this.$store.getters.getPluginsByDeveloperId(developerId);

        this.$store.dispatch('getDeveloper', developerId).then(function (developer) {
            _this.$root.pageTitle = _this.$options.filters.escapeHtml(developer.developerName);
            _this.$root.loading = false;
            _this.loading = false;
        }).catch(function (response) {
            _this.$root.loading = false;
            _this.loading = false;
        });

        this.$root.crumbs = [{
            label: this.$options.filters.t("Plugin Store", 'app'),
            path: '/'
        }];
    }
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "ps-grid-wrapper has-sidebar" }, [
      _c("div", { staticClass: "ps-grid-sidebar" }, [
        _c(
          "div",
          { staticClass: "developer-card" },
          [
            _vm.loading
              ? [_c("div", { staticClass: "spinner" })]
              : [
                  _c("div", { staticClass: "avatar" }, [
                    _c("img", { attrs: { src: _vm.developer.photoUrl } })
                  ]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.developer.developerName))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [_vm._v(_vm._s(_vm.developer.location))])
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "links" }, [
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { href: _vm.developer.developerUrl }
                        },
                        [_vm._v(_vm._s(_vm._f("t")("Website", "app")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { href: _vm.developer.developerUrl }
                        },
                        [_vm._v(_vm._s(_vm._f("t")("Contact", "app")))]
                      )
                    ])
                  ])
                ]
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "ps-grid-main" },
        [_c("plugin-index", { attrs: { plugins: _vm.plugins, columns: "3" } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aa3a95e6", module.exports)
  }
}

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(217)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/FeaturedPlugins.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6374b895", Component.options)
  } else {
    hotAPI.reload("data-v-6374b895", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginGrid: __webpack_require__(11)
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        getFeaturedPlugin: 'getFeaturedPlugin',
        getPluginsByIds: 'getPluginsByIds'
    }), {
        featuredPlugin: function featuredPlugin() {
            var featuredPlugin = this.getFeaturedPlugin(this.$route.params.id);

            if (featuredPlugin) {
                this.$root.pageTitle = this.$options.filters.escapeHtml(featuredPlugin.title);
            }

            return featuredPlugin;
        }
    }),

    created: function created() {
        this.$root.crumbs = [{
            label: this.$options.filters.t("Plugin Store", 'app'),
            path: '/'
        }];
    }
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.featuredPlugin
    ? _c(
        "div",
        [
          _c("plugin-grid", {
            attrs: {
              columns: 4,
              plugins: _vm.getPluginsByIds(_vm.featuredPlugin.plugins)
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6374b895", module.exports)
  }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(219)
/* template */
var __vue_template__ = __webpack_require__(220)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/Tests.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5923a564", Component.options)
  } else {
    hotAPI.reload("data-v-5923a564", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            somePrice: '99.00',
            modal: null
        };
    },


    computed: {
        craftTranslation: function craftTranslation() {
            return Craft.t('app', 'Go to {link}', { link: '<a href="#">test</a>' });
        }
    },

    created: function created() {
        this.$root.crumbs = [{
            label: this.$options.filters.t("Plugin Store", 'app'),
            path: '/'
        }];
    },
    mounted: function mounted() {
        this.modal = new Garnish.Modal(this.$refs.garnishmodalcontent, {
            autoShow: false,
            resizable: true
        });
    },


    methods: {
        openModal: function openModal() {
            this.modal.show();
        }
    }
});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Translations")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        _vm._s(_vm._f("currency")(_vm.somePrice)) + " per year for updates"
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        _vm._s(
          _vm._f("t")("{price} per year for updates", "app", {
            price: _vm.$root.$options.filters.currency(_vm.somePrice)
          })
        )
      )
    ]),
    _vm._v(" "),
    _vm._m(0, false, false),
    _vm._v(" "),
    _c("p", { domProps: { innerHTML: _vm._s(_vm.craftTranslation) } }),
    _vm._v(" "),
    _c("h2", [_vm._v("Modal")]),
    _vm._v(" "),
    _c("p", [
      _c(
        "a",
        {
          on: {
            click: function($event) {
              _vm.openModal()
            }
          }
        },
        [_vm._v("Open Garnish Modal")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "hidden" }, [
      _c("div", { ref: "garnishmodalcontent", staticClass: "modal" }, [
        _c("div", { staticClass: "body" }, [
          _vm._v("\n                Hello World\n            ")
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("{{ \"Go to {link}\"|t('app', { link: '"),
      _c("a", { attrs: { href: "#" } }, [_vm._v("test")]),
      _vm._v("' }) }}")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5923a564", module.exports)
  }
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(222)
/* template */
var __vue_template__ = __webpack_require__(223)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/pages/NotFound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b967a7c", Component.options)
  } else {
    hotAPI.reload("data-v-2b967a7c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        statusMessage: function statusMessage() {
            return this.$options.filters.t("Page not found.", 'app');
        }
    }
});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "spinner big error", attrs: { id: "graphic" } }),
    _vm._v(" "),
    _c("div", { attrs: { id: "status" } }, [_vm._v(_vm._s(_vm.statusMessage))])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b967a7c", module.exports)
  }
}

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_cart__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_developers__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_pluginstore__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_craft__ = __webpack_require__(232);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    modules: {
        cart: __WEBPACK_IMPORTED_MODULE_2__modules_cart__["a" /* default */],
        developers: __WEBPACK_IMPORTED_MODULE_3__modules_developers__["a" /* default */],
        pluginstore: __WEBPACK_IMPORTED_MODULE_4__modules_pluginstore__["a" /* default */],
        craft: __WEBPACK_IMPORTED_MODULE_5__modules_craft__["a" /* default */]
    }
}));

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex__);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex___default.a);

var state = {
    checkoutStatus: null,
    cart: null,
    cartForm: null,
    stripePublicKey: null,
    identityMode: 'craftid'

    /**
     * Getters
     */
};var getters = {
    identityMode: function identityMode(state) {
        return state.identityMode;
    },
    isInTrial: function isInTrial(state, rootState) {
        return function (plugin) {
            return rootState.activeTrialPlugins.find(function (p) {
                return p.id == plugin.id;
            });
        };
    },
    isInCart: function isInCart(state) {
        return function (plugin) {
            return state.cart.lineItems.find(function (lineItem) {
                return lineItem.purchasable.pluginId == plugin.id;
            });
        };
    },
    isCmsEditionInCart: function isCmsEditionInCart(state) {
        return function (cmsEdition) {
            if (state.cart) {
                return state.cart.lineItems.find(function (lineItem) {
                    return lineItem.purchasable.type === 'cms-edition' && lineItem.purchasable.handle === cmsEdition;
                });
            }
        };
    },
    cartTotal: function cartTotal(state) {
        if (state.cart) {
            return state.cart.totalPrice;
        }

        return 0;
    },
    activeTrialPlugins: function activeTrialPlugins(state, rootState) {
        if (!rootState.craftData.installedPlugins) {
            return [];
        }

        var plugins = rootState.craftData.installedPlugins.map(function (installedPlugin) {
            if (rootState.pluginStoreData.plugins) {
                return rootState.pluginStoreData.plugins.find(function (p) {
                    return p.handle === installedPlugin.handle && !installedPlugin.hasLicenseKey;
                });
            }
        });

        return plugins.filter(function (p) {
            if (p) {
                return p.editions[0].price > 0;
            }
        });
    },
    cart: function cart(state) {
        return state.cart;
    },
    cartItems: function cartItems(state, rootState) {
        if (!state.cart || !rootState.pluginStoreData.plugins) {
            return [];
        }

        var lineItems = state.cart.lineItems;

        var cartItems = [];

        lineItems.forEach(function (lineItem) {
            var cartItem = {};

            cartItem.lineItem = lineItem;

            if (lineItem.purchasable.type === 'plugin-edition') {
                cartItem.plugin = rootState.pluginStoreData.plugins.find(function (p) {
                    return p.handle === lineItem.purchasable.plugin.handle;
                });
            }

            cartItems.push(cartItem);
        });

        return cartItems;
    },
    stripePublicKey: function stripePublicKey(state) {
        return state.stripePublicKey;
    }
};

/**
 * Actions
 */
var actions = {
    setIdentityMode: function setIdentityMode(_ref, mode) {
        var commit = _ref.commit;

        commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* CHANGE_IDENTITY_MODE */], { mode: mode });
    },
    addToCart: function addToCart(_ref2, newItems) {
        var commit = _ref2.commit,
            state = _ref2.state;

        return new Promise(function (resolve, reject) {
            var cart = state.cart;
            var items = utils.getCartItemsData(cart);

            newItems.forEach(function (newItem) {
                var alreadyInCart = items.find(function (item) {
                    return item.plugin === newItem.plugin;
                });

                if (!alreadyInCart) {
                    items.push(newItem);
                }
            });

            var data = {
                items: items
            };

            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].updateCart(cart.number, data, function (response) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], { response: response });
                resolve(response);
            }, function (response) {
                reject(response);
            });
        });
    },
    removeFromCart: function removeFromCart(_ref3, lineItemKey) {
        var commit = _ref3.commit,
            state = _ref3.state;

        return new Promise(function (resolve, reject) {
            var cart = state.cart;

            var items = utils.getCartItemsData(cart);
            items.splice(lineItemKey, 1);

            var data = {
                items: items
            };

            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].updateCart(cart.number, data, function (response) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], { response: response });
                resolve(response);
            }, function (response) {
                reject(response);
            });
        });
    },
    checkout: function checkout(_ref4, data) {
        var dispatch = _ref4.dispatch,
            commit = _ref4.commit;

        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].checkout(data).then(function (response) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* CHECKOUT */], { response: response });
                resolve(response);
            }).catch(function (response) {
                reject(response);
            });
        });
    },
    getCart: function getCart(_ref5) {
        var dispatch = _ref5.dispatch,
            commit = _ref5.commit,
            rootState = _ref5.rootState;

        return new Promise(function (resolve, reject) {
            dispatch('getOrderNumber').then(function (orderNumber) {
                if (orderNumber) {
                    __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getCart(orderNumber, function (response) {
                        if (!response.error) {
                            commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], { response: response });
                            resolve(response);
                        } else {
                            // Couldn’t get cart for this order number? Try to create a new one.
                            var data = {};

                            if (!rootState.craft.craftData.craftId) {
                                data.email = rootState.craft.craftData.currentUser.email;
                            }

                            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].createCart(data, function (response2) {
                                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], { response: response2 });
                                dispatch('saveOrderNumber', { orderNumber: response2.cart.number });
                                resolve(response);
                            }, function (response) {
                                reject(response);
                            });
                        }
                    }, function (response) {
                        reject(response);
                    });
                } else {
                    // No order number yet? Create a new cart.
                    var data = {};

                    if (!rootState.craft.craftData.craftId) {
                        data.email = rootState.craft.craftData.currentUser.email;
                    }

                    __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].createCart(data, function (response) {
                        commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], { response: response });
                        dispatch('saveOrderNumber', { orderNumber: response.cart.number });
                        resolve(response);
                    }, function (response) {
                        reject(response);
                    });
                }
            });
        });
    },
    saveCart: function saveCart(_ref6, data) {
        var commit = _ref6.commit,
            state = _ref6.state;

        return new Promise(function (resolve, reject) {
            var cart = state.cart;

            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].updateCart(cart.number, data, function (response) {
                if (!response.errors) {
                    commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], { response: response });
                    resolve(response);
                } else {
                    reject(response);
                }
            }, function (response) {
                reject(response);
            });
        });
    },
    resetCart: function resetCart(_ref7) {
        var commit = _ref7.commit,
            dispatch = _ref7.dispatch;

        return new Promise(function (resolve, reject) {
            commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["h" /* RESET_CART */]);
            dispatch('resetOrderNumber');
            dispatch('getCart').then(function (response) {
                resolve(response);
            }).catch(function (response) {
                reject(response);
            });
        });
    },
    getOrderNumber: function getOrderNumber(_ref8) {
        var state = _ref8.state;

        return new Promise(function (resolve, reject) {
            if (state.cart && state.cart.number) {
                var orderNumber = state.cart.number;
                resolve(orderNumber);
            } else {
                __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getOrderNumber(function (orderNumber) {
                    resolve(orderNumber);
                }, function (response) {
                    reject(response);
                });
            }
        });
    },
    resetOrderNumber: function resetOrderNumber() {
        __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].resetOrderNumber();
    },
    saveOrderNumber: function saveOrderNumber(_ref9, _ref10) {
        var state = _ref9.state;
        var orderNumber = _ref10.orderNumber;

        __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].saveOrderNumber(orderNumber);
    },
    savePluginLicenseKeys: function savePluginLicenseKeys(_ref11, cart) {
        var state = _ref11.state,
            rootState = _ref11.rootState;

        return new Promise(function (resolve, reject) {
            var pluginLicenseKeys = [];

            cart.lineItems.forEach(function (lineItem) {
                if (lineItem.purchasable.type === 'plugin-edition') {
                    if (rootState.craft.craftData.installedPlugins.find(function (installedPlugin) {
                        return installedPlugin.handle === lineItem.purchasable.plugin.handle;
                    })) {
                        pluginLicenseKeys.push({
                            handle: lineItem.purchasable.plugin.handle,
                            key: lineItem.options.licenseKey.substr(4)
                        });
                    }
                }
            });

            var data = {
                pluginLicenseKeys: pluginLicenseKeys
            };

            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].savePluginLicenseKeys(data).then(function (response) {
                resolve(response);
            }).catch(function (response) {
                reject(response);
            });
        });
    }
};

/**
 * Mutations
 */
var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* RECEIVE_CART */], function (state, _ref12) {
    var response = _ref12.response;

    state.cart = response.cart;
    state.stripePublicKey = response.stripePublicKey;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["h" /* RESET_CART */], function (state) {
    state.cart = null;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* CHECKOUT */], function (state, _ref13) {
    var response = _ref13.response;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* CHANGE_IDENTITY_MODE */], function (state, mode) {
    state.identityMode = mode;
}), _mutations);

/**
 * Utils
 */
var utils = {
    getCartData: function getCartData(cart) {
        var data = {
            email: cart.email,
            billingAddress: {
                firstName: cart.billingAddress.firstName,
                lastName: cart.billingAddress.lastName
            },
            items: []
        };

        data.items = this.getCartItemsData(cart);

        return data;
    },
    getCartItemsData: function getCartItemsData(cart) {
        var lineItems = [];
        for (var i = 0; i < cart.lineItems.length; i++) {
            var lineItem = cart.lineItems[i];

            switch (lineItem.purchasable.type) {
                case 'plugin-edition':
                    lineItems.push({
                        type: lineItem.purchasable.type,
                        plugin: lineItem.purchasable.plugin.handle,
                        edition: lineItem.purchasable.handle,
                        autoRenew: lineItem.options.autoRenew,
                        cmsLicenseKey: lineItem.options.cmsLicenseKey
                    });
                    break;
                case 'cms-edition':
                    lineItems.push({
                        type: lineItem.purchasable.type,
                        edition: lineItem.purchasable.handle,
                        licenseKey: lineItem.options.licenseKey,
                        autoRenew: lineItem.options.autoRenew
                    });
                    break;
            }
        }

        return lineItems;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(228);
var parse = __webpack_require__(229);
var formats = __webpack_require__(67);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(66);
var formats = __webpack_require__(67);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(66);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(21);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var state = {
    developer: []
};

var getters = {
    developer: function developer(state) {
        return state.developer;
    }
};

var actions = {
    getDeveloper: function getDeveloper(_ref, developerId) {
        var commit = _ref.commit;

        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getDeveloper(developerId, function (developer) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["e" /* RECEIVE_DEVELOPER */], { developer: developer });
                resolve(developer);
            }, function (response) {
                reject(response);
            });
        });
    }
};

var mutations = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["e" /* RECEIVE_DEVELOPER */], function (state, _ref2) {
    var developer = _ref2.developer;

    state.developer = developer;
});

/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(21);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var state = {
    data: {},
    plugin: null
};

var getters = {

    pluginStoreData: function pluginStoreData(state) {
        return state.data;
    },

    pluginStoreGetAllCategories: function pluginStoreGetAllCategories(state) {
        return state.data.categories;
    },
    getFeaturedPlugin: function getFeaturedPlugin(state) {
        return function (id) {
            if (state.data.featuredPlugins) {
                return state.data.featuredPlugins.find(function (g) {
                    return g.id == id;
                });
            }
        };
    },
    getAllCategories: function getAllCategories(state) {
        return function () {
            return state.data.categories;
        };
    },
    getCategoryById: function getCategoryById(state) {
        return function (id) {
            if (state.data.categories) {
                return state.data.categories.find(function (c) {
                    return c.id == id;
                });
            }
        };
    },
    isInstalled: function isInstalled(state, rootState) {
        return function (plugin) {
            return rootState.installedPlugins.find(function (p) {
                return p.id == plugin.id;
            });
        };
    },


    allPlugins: function allPlugins(state, rootState) {
        return state.data.plugins;
    },

    getPluginById: function getPluginById(state, rootState) {
        return function (id) {
            if (state.data.plugins) {
                return state.data.plugins.find(function (p) {
                    return p.id == id;
                });
            }

            return false;
        };
    },
    getPluginsByIds: function getPluginsByIds(state, rootState) {
        return function (ids) {
            return state.data.plugins.filter(function (p) {
                return ids.find(function (id) {
                    return id == p.id;
                });
            });
        };
    },
    getPluginsByCategory: function getPluginsByCategory(state, rootState) {
        return function (categoryId) {
            return state.data.plugins.filter(function (p) {
                return p.categoryIds.find(function (c) {
                    return c == categoryId;
                });
            });
        };
    },
    getPluginsByDeveloperId: function getPluginsByDeveloperId(state, rootState) {
        return function (developerId) {
            if (state.data.plugins) {
                return state.data.plugins.filter(function (p) {
                    return p.developerId == developerId;
                });
            }
        };
    }
};

var actions = {
    getPluginStoreData: function getPluginStoreData(_ref) {
        var commit = _ref.commit;

        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getPluginStoreData(function (data) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["g" /* RECEIVE_PLUGIN_STORE_DATA */], { data: data });
                resolve(data);
            }, function (response) {
                reject(response);
            });
        });
    },
    getPluginDetails: function getPluginDetails(_ref2, pluginId) {
        var commit = _ref2.commit;

        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getPluginDetails(pluginId, function (data) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["f" /* RECEIVE_PLUGIN_DETAILS */], { data: data });
                resolve(data);
            }, function (response) {
                reject(response);
            });
        });
    }
};

var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["g" /* RECEIVE_PLUGIN_STORE_DATA */], function (state, _ref3) {
    var data = _ref3.data;

    state.data = data;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["f" /* RECEIVE_PLUGIN_DETAILS */], function (state, _ref4) {
    var data = _ref4.data;

    state.plugin = data;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(21);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var state = {
    craftData: {}
};

var getters = {

    craftData: function craftData(state) {
        return state.craftData;
    },

    installedPlugins: function installedPlugins(state, rootState) {
        if (!rootState.allPlugins) {
            return [];
        }

        return rootState.allPlugins.filter(function (p) {
            if (state.craftData.installedPlugins) {
                return state.craftData.installedPlugins.find(function (plugin) {
                    return plugin.packageName === p.packageName && plugin.handle === p.handle;
                });
            }
            return false;
        });
    },

    currentUser: function currentUser(state) {
        return state.craftData.currentUser;
    },

    craftIdAccount: function craftIdAccount(state) {
        return state.craftData.craftId;
    },

    countries: function countries(state) {
        return state.craftData.countries;
    },

    states: function states(state) {
        return state.craftData.states;
    },

    pluginHasLicenseKey: function pluginHasLicenseKey(state) {
        return function (pluginHandle) {
            return state.craftData.installedPlugins.find(function (plugin) {
                return plugin.handle === pluginHandle && plugin.hasLicenseKey;
            }) ? true : false;
        };
    }
};

var actions = {
    getCraftData: function getCraftData(_ref) {
        var commit = _ref.commit;

        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getCraftData(function (data) {
                commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["d" /* RECEIVE_CRAFT_DATA */], { data: data });
                resolve(data);
            }, function (response) {
                reject(response);
            });
        });
    },
    updateCraftId: function updateCraftId(_ref2, craftId) {
        var commit = _ref2.commit;

        commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["i" /* UPDATE_CRAFT_ID */], craftId);
    },
    tryEdition: function tryEdition(_ref3, edition) {
        var commit = _ref3.commit;

        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].tryEdition(edition).then(function (response) {
                resolve(response);
            }).catch(function (response) {
                reject(response);
            });
        });
    }
};

var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["d" /* RECEIVE_CRAFT_DATA */], function (state, _ref4) {
    var data = _ref4.data;

    state.craftData = data;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["i" /* UPDATE_CRAFT_ID */], function (state, _ref5) {
    var craftId = _ref5.craftId;

    state.craftData.craftId = craftId;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(234)
/* template */
var __vue_template__ = __webpack_require__(273)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/GlobalModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c268db3", Component.options)
  } else {
    hotAPI.reload("data-v-3c268db3", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PluginDetails: __webpack_require__(235),
        Cart: __webpack_require__(238),
        Payment: __webpack_require__(241),
        ThankYou: __webpack_require__(267),
        Identity: __webpack_require__(270)
    },

    props: ['pluginId', 'show'],

    data: function data() {
        return {
            modal: null
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        identityMode: 'identityMode'
    }), {
        modalStep: function modalStep() {
            return this.$root.modalStep;
        }
    }),

    watch: {
        show: function show(_show) {
            if (_show) {
                this.modal.show();
            } else {
                this.modal.hide();
            }
        }
    },

    methods: {
        back: function back() {
            if (this.identityMode === 'craftid' || this.modalStep === 'identity') {
                this.$root.openGlobalModal('cart');
            } else {
                this.$root.openGlobalModal('identity');
            }
        }
    },

    mounted: function mounted() {
        var $this = this;

        this.modal = new Garnish.Modal(this.$refs.globalmodal, {
            autoShow: false,
            resizable: true,
            onHide: function onHide() {
                $this.$emit('update:show', false);
            }
        });
    }
});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(236)
/* template */
var __vue_template__ = __webpack_require__(237)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/PluginDetails.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a552c90", Component.options)
  } else {
    hotAPI.reload("data-v-1a552c90", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['pluginId'],

    data: function data() {
        return {
            plugin: null,
            pluginSnippet: null,
            loading: false
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        plugins: 'allPlugins',
        activeTrialPlugins: 'activeTrialPlugins',
        isInTrial: 'isInTrial',
        isInCart: 'isInCart',
        isInstalled: 'isInstalled',
        pluginHasLicenseKey: 'pluginHasLicenseKey',
        cart: 'cart'
    }), {
        longDescription: function longDescription() {
            if (this.plugin.longDescription && this.plugin.longDescription.length > 0) {
                return this.plugin.longDescription;
            }
        },
        developerUrl: function developerUrl() {
            return Craft.getCpUrl('plugin-store/developer/' + this.plugin.developerId);
        },
        categories: function categories() {
            var _this = this;

            return this.$store.getters.getAllCategories().filter(function (c) {
                return _this.plugin.categoryIds.find(function (pc) {
                    return pc == c.id;
                });
            });
        },
        licenseLabel: function licenseLabel() {
            switch (this.plugin.license) {
                case 'craft':
                    return 'Craft';

                case 'mit':
                    return 'MIT';
            }
        },
        lastUpdate: function lastUpdate() {
            return Craft.formatDate(this.plugin.lastUpdate);
        },
        csrfTokenName: function csrfTokenName() {
            return Craft.csrfTokenName;
        },
        csrfTokenValue: function csrfTokenValue() {
            return Craft.csrfTokenValue;
        },
        allowUpdates: function allowUpdates() {
            return window.allowUpdates;
        }
    }),

    watch: {
        pluginId: function pluginId(_pluginId) {
            this.loadPlugin(_pluginId);
            return _pluginId;
        }
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['addToCart']), {
        buyPlugin: function buyPlugin(plugin) {
            var _this2 = this;

            this.loading = true;

            var item = {
                type: 'plugin-edition',
                plugin: plugin.handle,
                edition: plugin.editions[0].handle,
                autoRenew: false,
                cmsLicenseKey: window.cmsLicenseKey
            };

            this.$store.dispatch('addToCart', [item]).then(function () {
                _this2.loading = false;
                _this2.$root.openGlobalModal('cart');
            });
        },
        viewDeveloper: function viewDeveloper(plugin) {
            this.$root.closeGlobalModal();
            this.$root.pageTitle = this.$options.filters.escapeHtml(plugin.developerName);
            this.$router.push({ path: '/developer/' + plugin.developerId });
        },
        viewCategory: function viewCategory(category) {
            this.$root.closeGlobalModal();
            this.$root.pageTitle = category.name;
            this.$router.push({ path: '/categories/' + category.id });
        },
        loadPlugin: function loadPlugin(pluginId) {
            var _this3 = this;

            this.plugin = null;
            this.pluginSnippet = this.$store.getters.getPluginById(pluginId);

            this.$store.dispatch('getPluginDetails', pluginId).then(function (plugin) {
                _this3.plugin = plugin;
            }).catch(function (response) {
                console.log('error', response);
            });
        }
    }),

    mounted: function mounted() {
        this.loadPlugin(this.pluginId);
    }
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.pluginSnippet
    ? _c("div", { staticClass: "plugin-details" }, [
        _c("div", { staticClass: "plugin-details-header" }, [
          _c("div", { staticClass: "plugin-icon-large" }, [
            _vm.pluginSnippet.iconUrl
              ? _c("img", {
                  attrs: { src: _vm.pluginSnippet.iconUrl, height: "60" }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description" }, [
            _c("h2", [_vm._v(_vm._s(_vm.pluginSnippet.name))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.pluginSnippet.shortDescription))]),
            _vm._v(" "),
            _c("p", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      _vm.viewDeveloper(_vm.pluginSnippet)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.pluginSnippet.developerName))]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.cart
            ? _c(
                "div",
                { staticClass: "buttons" },
                [
                  _vm.pluginSnippet.editions[0].price != "0.00" &&
                  _vm.pluginSnippet.editions[0].price != null
                    ? [
                        _vm.isInstalled(_vm.pluginSnippet)
                          ? [
                              _vm.pluginHasLicenseKey(_vm.pluginSnippet.handle)
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "license-status installed",
                                        attrs: { "data-icon": "check" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("t")("Installed", "app")
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "license-status installed",
                                        attrs: { "data-icon": "check" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("t")(
                                              "Installed as a trial",
                                              "app"
                                            )
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.isInCart(_vm.pluginSnippet)
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "btn submit disabled",
                                            on: {
                                              click: function($event) {
                                                _vm.buyPlugin(_vm.pluginSnippet)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("t")(
                                                  "Added to cart",
                                                  "app"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            staticClass: "btn submit",
                                            on: {
                                              click: function($event) {
                                                _vm.buyPlugin(_vm.pluginSnippet)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("t")(
                                                  "Buy {price}",
                                                  "app",
                                                  {
                                                    price: _vm.$root.$options.filters.currency(
                                                      _vm.pluginSnippet
                                                        .editions[0].price
                                                    )
                                                  }
                                                )
                                              )
                                            )
                                          ]
                                        )
                                  ]
                            ]
                          : [
                              _c("form", { attrs: { method: "post" } }, [
                                _c("input", {
                                  attrs: {
                                    type: "hidden",
                                    name: _vm.csrfTokenName
                                  },
                                  domProps: { value: _vm.csrfTokenValue }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: {
                                    type: "hidden",
                                    name: "action",
                                    value: "pluginstore/install"
                                  }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: {
                                    type: "hidden",
                                    name: "packageName"
                                  },
                                  domProps: {
                                    value: _vm.pluginSnippet.packageName
                                  }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: { type: "hidden", name: "handle" },
                                  domProps: { value: _vm.pluginSnippet.handle }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: { type: "hidden", name: "version" },
                                  domProps: { value: _vm.pluginSnippet.version }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "btn",
                                  attrs: { type: "submit" },
                                  domProps: { value: _vm._f("t")("Try", "app") }
                                })
                              ]),
                              _vm._v(" "),
                              _vm.isInCart(_vm.pluginSnippet)
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn submit disabled",
                                      on: {
                                        click: function($event) {
                                          _vm.buyPlugin(_vm.pluginSnippet)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("t")("Added to cart", "app")
                                        )
                                      )
                                    ]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass: "btn submit",
                                      on: {
                                        click: function($event) {
                                          _vm.buyPlugin(_vm.pluginSnippet)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("t")("Buy {price}", "app", {
                                            price: _vm.$root.$options.filters.currency(
                                              _vm.pluginSnippet.editions[0]
                                                .price
                                            )
                                          })
                                        )
                                      )
                                    ]
                                  )
                            ]
                      ]
                    : _c("div", [
                        _vm.isInstalled(_vm.pluginSnippet)
                          ? _c("a", { staticClass: "btn submit disabled" }, [
                              _vm._v(_vm._s(_vm._f("t")("Installed", "app")))
                            ])
                          : _vm.allowUpdates
                            ? _c("div", [
                                _c("form", { attrs: { method: "post" } }, [
                                  _c("input", {
                                    attrs: {
                                      type: "hidden",
                                      name: _vm.csrfTokenName
                                    },
                                    domProps: { value: _vm.csrfTokenValue }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      type: "hidden",
                                      name: "action",
                                      value: "pluginstore/install"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      type: "hidden",
                                      name: "packageName"
                                    },
                                    domProps: {
                                      value: _vm.pluginSnippet.packageName
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: { type: "hidden", name: "handle" },
                                    domProps: {
                                      value: _vm.pluginSnippet.handle
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: { type: "hidden", name: "version" },
                                    domProps: {
                                      value: _vm.pluginSnippet.version
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "btn submit",
                                    attrs: { type: "submit" },
                                    domProps: {
                                      value: _vm._f("t")("Install", "app")
                                    }
                                  })
                                ])
                              ])
                            : _vm._e()
                      ])
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", [
            _vm.loading ? _c("div", { staticClass: "spinner" }) : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "plugin-details-body" },
          [
            _vm.plugin
              ? [
                  _c("div", { staticClass: "plugin-description" }, [
                    _c("div", {
                      staticClass: "readable",
                      domProps: { innerHTML: _vm._s(_vm.longDescription) }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "screenshots" },
                      _vm._l(_vm.plugin.screenshotUrls, function(
                        screenshotUrl
                      ) {
                        return _c("img", { attrs: { src: screenshotUrl } })
                      })
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "plugin-sidebar" }, [
                    _c("div", { staticClass: "plugin-meta" }, [
                      _c("ul", { staticClass: "plugin-meta-data" }, [
                        _c("li", [
                          _c("span", [
                            _vm._v(_vm._s(_vm._f("t")("Version", "app")))
                          ]),
                          _vm._v(" "),
                          _c("strong", [_vm._v(_vm._s(_vm.plugin.version))])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", [
                            _vm._v(_vm._s(_vm._f("t")("Last update", "app")))
                          ]),
                          _vm._v(" "),
                          _c("strong", [_vm._v(_vm._s(_vm.lastUpdate))])
                        ]),
                        _vm._v(" "),
                        _vm.plugin.activeInstalls > 0
                          ? _c("li", [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm._f("t")("Active installs", "app"))
                                )
                              ]),
                              _vm._v(" "),
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatNumber")(
                                      _vm.plugin.activeInstalls
                                    )
                                  )
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", [
                            _vm._v(_vm._s(_vm._f("t")("Compatibility", "app")))
                          ]),
                          _vm._v(" "),
                          _c("strong", [
                            _vm._v(_vm._s(_vm.plugin.compatibility))
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.categories.length > 0
                          ? _c("li", [
                              _c("span", [
                                _vm._v(_vm._s(_vm._f("t")("Categories", "app")))
                              ]),
                              _vm._v(" "),
                              _c(
                                "strong",
                                [
                                  _vm._l(_vm.categories, function(
                                    category,
                                    key
                                  ) {
                                    return [
                                      _c(
                                        "a",
                                        {
                                          on: {
                                            click: function($event) {
                                              _vm.viewCategory(category)
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(category.title))]
                                      ),
                                      key < _vm.categories.length - 1
                                        ? [_vm._v(", ")]
                                        : _vm._e()
                                    ]
                                  })
                                ],
                                2
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", [
                            _vm._v(_vm._s(_vm._f("t")("License", "app")))
                          ]),
                          _vm._v(" "),
                          _c("strong", [_vm._v(_vm._s(_vm.licenseLabel))])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.plugin.documentationUrl || _vm.plugin.changelogUrl
                        ? _c("ul", { staticClass: "plugin-meta-links" }, [
                            _vm.plugin.documentationUrl
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn fullwidth",
                                      attrs: {
                                        href: _vm.plugin.documentationUrl,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("t")("Documentation", "app")
                                        )
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.plugin.changelogUrl
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn fullwidth",
                                      attrs: {
                                        href: _vm.plugin.changelogUrl,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm._f("t")("Changelog", "app"))
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ])
                  ])
                ]
              : [_c("div", { staticClass: "plugin-details-loading spinner" })]
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a552c90", module.exports)
  }
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(239)
/* template */
var __vue_template__ = __webpack_require__(240)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/Cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e7468f2", Component.options)
  } else {
    hotAPI.reload("data-v-7e7468f2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        isInTrial: 'isInTrial',
        activeTrialPlugins: 'activeTrialPlugins',
        cartTotal: 'cartTotal',
        cart: 'cart',
        cartItems: 'cartItems',
        craftData: 'craftData',
        craftIdAccount: 'craftIdAccount'
    }), {
        pendingActiveTrials: function pendingActiveTrials() {
            var _this = this;

            return this.activeTrialPlugins.filter(function (p) {
                if (p) {
                    return !_this.cart.lineItems.find(function (item) {
                        return item.purchasable.pluginId == p.id;
                    });
                }
            });
        }
    }),

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['removeFromCart']), {
        addToCart: function addToCart(plugin) {
            var item = {
                type: 'plugin-edition',
                plugin: plugin.handle,
                edition: plugin.editions[0].handle,
                autoRenew: false,
                cmsLicenseKey: window.cmsLicenseKey
            };

            this.$store.dispatch('addToCart', [item]);
        },
        addAllToCart: function addAllToCart() {
            var $store = this.$store;
            var items = [];

            this.pendingActiveTrials.forEach(function (activeTrialPlugin) {
                items.push({
                    type: 'plugin-edition',
                    plugin: activeTrialPlugin.handle,
                    edition: activeTrialPlugin.editions[0].handle,
                    autoRenew: false,
                    cmsLicenseKey: window.cmsLicenseKey
                });
            });

            $store.dispatch('addToCart', items);
        },
        payment: function payment() {
            if (this.craftIdAccount) {
                this.$root.openGlobalModal('payment');
            } else {
                this.$root.openGlobalModal('identity');
            }
        }
    })

});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", [_vm._v(_vm._s(_vm._f("t")("Items in your cart", "app")))]),
      _vm._v(" "),
      _vm.cart
        ? [
            _vm.cartItems.length
              ? [
                  _c("table", { staticClass: "data fullwidth" }, [
                    _vm._m(0, false, false),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.cartItems, function(item, itemKey) {
                          return _c(
                            "tr",
                            [
                              item.lineItem.purchasable.type === "cms-edition"
                                ? [
                                    _c("td", { staticClass: "thin" }, [
                                      _c(
                                        "div",
                                        { staticClass: "plugin-icon" },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: _vm.craftData.craftLogo,
                                              width: "32",
                                              height: "32"
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "Craft " +
                                          _vm._s(item.lineItem.purchasable.name)
                                      )
                                    ])
                                  ]
                                : [
                                    _c("td", { staticClass: "thin" }, [
                                      _c(
                                        "div",
                                        { staticClass: "plugin-icon" },
                                        [
                                          item.plugin.iconUrl
                                            ? _c("img", {
                                                attrs: {
                                                  src: item.plugin.iconUrl,
                                                  height: "32"
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(item.plugin.name) +
                                          "\n                        "
                                      )
                                    ])
                                  ],
                              _vm._v(" "),
                              _c("td", { staticClass: "rightalign" }, [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("currency")(item.lineItem.total)
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "thin" }, [
                                _c("a", {
                                  staticClass: "delete icon",
                                  attrs: { role: "button" },
                                  on: {
                                    click: function($event) {
                                      _vm.removeFromCart(itemKey)
                                    }
                                  }
                                })
                              ])
                            ],
                            2
                          )
                        }),
                        _vm._v(" "),
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass: "rightalign",
                              attrs: { colspan: "2" }
                            },
                            [_vm._v("Total Price")]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "rightalign" }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(_vm._f("currency")(_vm.cart.totalPrice))
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "thin" })
                        ])
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c(
                      "a",
                      {
                        staticClass: "btn submit",
                        on: {
                          click: function($event) {
                            _vm.payment()
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm._f("t")("Process My Order", "app")))]
                    )
                  ])
                ]
              : _c("div", [
                  _c("p", [
                    _vm._v(
                      _vm._s(_vm._f("t")("Your cart is empty.", "app")) + " "
                    ),
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            _vm.$emit("continue-shopping")
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm._f("t")("Continue shopping", "app")))]
                    )
                  ])
                ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.pendingActiveTrials && _vm.pendingActiveTrials.length > 0
        ? [
            _c("hr"),
            _vm._v(" "),
            _vm.pendingActiveTrials.length > 1
              ? _c("div", { staticClass: "right" }, [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          _vm.addAllToCart()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm._f("t")("Add all to cart", "app")))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("h2", [_vm._v(_vm._s(_vm._f("t")("Active Trials", "app")))]),
            _vm._v(" "),
            _c("table", { staticClass: "data fullwidth" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "thin" }),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm._f("t")("Plugin Name", "app")))])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.pendingActiveTrials, function(plugin) {
                  return _c(
                    "tr",
                    [
                      plugin
                        ? [
                            _c("td", { staticClass: "thin" }, [
                              _c("div", { staticClass: "plugin-icon" }, [
                                plugin.iconUrl
                                  ? _c("img", {
                                      attrs: {
                                        src: plugin.iconUrl,
                                        height: "32"
                                      }
                                    })
                                  : _c("div", { staticClass: "default-icon" })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(plugin.name) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("currency")(plugin.editions[0].price)
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "thin" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn",
                                  on: {
                                    click: function($event) {
                                      _vm.addToCart(plugin)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm._f("t")("Add to cart", "app"))
                                  )
                                ]
                              )
                            ])
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                })
              )
            ])
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Item")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e7468f2", module.exports)
  }
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(242)
/* template */
var __vue_template__ = __webpack_require__(266)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/Payment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f9e3d6f", Component.options)
  } else {
    hotAPI.reload("data-v-3f9e3d6f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        CheckboxField: __webpack_require__(243),
        TextareaField: __webpack_require__(246),
        TextField: __webpack_require__(68),
        TextInput: __webpack_require__(33),
        CreditCard: __webpack_require__(256),
        SelectInput: __webpack_require__(263)
    },

    data: function data() {
        return {
            error: false,
            loading: false,
            paymentMode: 'newCard',
            cardToken: null,
            guestCardToken: null,
            replaceCard: false,
            couponCode: '',
            couponCodeLoading: false,
            couponCodeSuccess: false,
            couponCodeError: false,
            couponCodeTimeout: false,

            billingInfo: {
                firstName: '',
                lastName: '',
                businessName: '',
                businessTaxId: '',
                address1: '',
                address2: '',
                country: '',
                state: '',
                city: '',
                zipCode: ''
            },

            billingInfoErrors: {
                businessTaxId: false
            },

            errors: {},

            stateOptions: [],

            staticCartTotal: 0
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        cartTotal: 'cartTotal',
        craftIdAccount: 'craftIdAccount',
        countries: 'countries',
        states: 'states',
        cart: 'cart',
        craftData: 'craftData'
    }), {
        countryOptions: function countryOptions() {
            var options = [];

            for (var iso in this.countries) {
                if (this.countries.hasOwnProperty(iso)) {
                    options.push({
                        label: this.countries[iso].name,
                        value: iso
                    });
                }
            }

            return options;
        },
        billingCountryName: function billingCountryName() {
            var iso = this.billingInfo.country;

            if (!iso) {
                return;
            }

            if (!this.countries[iso]) {
                return;
            }

            return this.countries[iso].name;
        }
    }),

    methods: {
        savePaymentMethod: function savePaymentMethod(cb, cbError) {
            var _this = this;

            if (this.cartTotal > 0) {
                if (this.craftIdAccount) {
                    if (this.paymentMode === 'newCard') {
                        // Save new card
                        if (!this.cardToken) {
                            this.$refs.newCard.save(function (response) {
                                _this.cardToken = response;
                                cb();
                            }, function () {
                                cbError();
                            });
                        } else {
                            cb();
                        }
                    } else {
                        cb();
                    }
                } else {
                    // Save guest card
                    this.$refs.guestCard.save(function (response) {
                        _this.guestCardToken = response;
                        cb();
                    }, function () {
                        cbError();
                    });
                }
            } else {
                cb();
            }
        },
        saveBillingInfo: function saveBillingInfo(cb, cbError) {
            var cartData = {
                billingAddress: {
                    firstName: this.billingInfo.firstName,
                    lastName: this.billingInfo.lastName,
                    businessName: this.billingInfo.businessName,
                    businessTaxId: this.billingInfo.businessTaxId,
                    address1: this.billingInfo.address1,
                    address2: this.billingInfo.address2,
                    country: this.billingInfo.country,
                    state: this.billingInfo.state,
                    city: this.billingInfo.city,
                    zipCode: this.billingInfo.zipCode
                }
            };

            this.$store.dispatch('saveCart', cartData).then(function (response) {
                cb(response);
            }).catch(function (response) {
                cbError(response);
            });
        },
        checkout: function checkout() {
            var _this2 = this;

            this.errors = {};
            this.loading = true;
            this.savePaymentMethod(function () {
                _this2.saveBillingInfo(function () {
                    // Ready to pay
                    var cardToken = null;

                    if (_this2.cartTotal > 0) {
                        if (_this2.craftIdAccount) {
                            switch (_this2.paymentMode) {
                                case 'newCard':
                                    cardToken = _this2.cardToken.id;
                                    break;
                                default:
                                    cardToken = _this2.craftIdAccount.cardToken;
                            }
                        } else {
                            cardToken = _this2.guestCardToken.id;
                        }
                    }

                    var checkoutData = {
                        orderNumber: _this2.cart.number,
                        token: cardToken,
                        expectedPrice: _this2.cart.totalPrice,
                        makePrimary: _this2.replaceCard
                    };

                    _this2.$store.dispatch('checkout', checkoutData).then(function (response) {
                        _this2.$store.dispatch('savePluginLicenseKeys', _this2.cart).then(function (response) {
                            _this2.$store.dispatch('getCraftData').then(function () {
                                _this2.$store.dispatch('resetCart').then(function () {
                                    _this2.loading = false;
                                    _this2.error = false;
                                    _this2.$root.modalStep = 'thankYou';
                                });
                            });
                        });
                    }).catch(function (response) {
                        _this2.loading = false;
                        _this2.error = response.statusText;
                    });
                }, function (response) {
                    if (response.errors) {
                        response.errors.forEach(function (error) {
                            _this2.errors[error.param] = error.message;
                        });
                    }
                    _this2.loading = false;
                    _this2.$root.displayError("Couldn't save billing informations.");
                });
            }, function () {
                _this2.loading = false;
                _this2.$root.displayError("Couldn't save payment method.");
            });
        },
        onCountryChange: function onCountryChange(iso) {
            if (!this.countries[iso]) {
                this.stateOptions = [];
                return;
            }

            var country = this.countries[iso];

            if (!country.states) {
                this.stateOptions = [];
                return;
            }

            var states = country.states;
            var options = [];

            for (var _iso in states) {
                if (states.hasOwnProperty(_iso)) {
                    options.push({
                        label: states[_iso],
                        value: _iso
                    });
                }
            }

            this.stateOptions = options;
        },
        couponCodeChange: function couponCodeChange(value) {
            clearTimeout(this.couponCodeTimeout);
            this.couponCodeSuccess = false;
            this.couponCodeError = false;

            this.couponCodeTimeout = setTimeout(function () {
                var _this3 = this;

                this.couponCodeLoading = true;

                var data = {
                    couponCode: value ? value : null
                };

                this.$store.dispatch('saveCart', data).then(function (response) {
                    _this3.couponCodeSuccess = true;
                    _this3.couponCodeError = false;
                    _this3.staticCartTotal = _this3.cartTotal;
                    _this3.couponCodeLoading = false;
                }).catch(function (response) {
                    _this3.couponCodeError = true;
                    _this3.staticCartTotal = _this3.cartTotal;
                    _this3.couponCodeLoading = false;
                });
            }.bind(this), 500);
        }
    },

    mounted: function mounted() {
        var _this4 = this;

        this.staticCartTotal = this.cartTotal;
        this.couponCode = this.cart.couponCode;

        if (this.craftIdAccount && this.craftIdAccount.billingAddress) {
            if (this.craftIdAccount.card) {
                this.paymentMode = 'existingCard';
            }

            if (this.craftIdAccount.billingAddress.country) {
                this.onCountryChange(this.craftIdAccount.billingAddress.country);
            }

            this.$nextTick(function () {
                _this4.billingInfo = _this4.craftIdAccount.billingAddress;
            });
        }
    }
});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(244)
/* template */
var __vue_template__ = __webpack_require__(245)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/fields/CheckboxField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4303c7c8", Component.options)
  } else {
    hotAPI.reload("data-v-4303c7c8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['label', 'id', 'value'],

    data: function data() {
        return {
            checked: this.value
        };
    },


    methods: {
        change: function change($event) {
            this.checked = !this.checked;
            this.$emit('input', this.checked);
        }
    }

});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field" }, [
    _c("input", {
      staticClass: "checkbox",
      attrs: { id: _vm.id, type: "checkbox", value: "1" },
      domProps: { checked: _vm.checked },
      on: { change: _vm.change }
    }),
    _vm._v(" "),
    _c("label", { attrs: { id: _vm.id + "-label", for: _vm.id } }, [
      _vm._v(_vm._s(_vm.label))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4303c7c8", module.exports)
  }
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(247)
/* template */
var __vue_template__ = __webpack_require__(251)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/fields/TextareaField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b0d2231", Component.options)
  } else {
    hotAPI.reload("data-v-0b0d2231", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['label', 'id', 'placeholder', 'value', 'cols'],

    components: {
        TextareaInput: __webpack_require__(248)
    }

});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(249)
/* template */
var __vue_template__ = __webpack_require__(250)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/inputs/TextareaInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f9ba831", Component.options)
  } else {
    hotAPI.reload("data-v-3f9ba831", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['id', 'placeholder', 'value', 'cols']

});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("textarea", {
    staticClass: "text fullwidth",
    attrs: {
      type: "text",
      id: _vm.id,
      placeholder: _vm.placeholder,
      autocomplete: "off",
      cols: _vm.cols
    },
    domProps: { value: _vm.value },
    on: {
      input: function($event) {
        _vm.$emit("input", $event.target.value)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f9ba831", module.exports)
  }
}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field first" }, [
    _vm.label
      ? _c("div", { staticClass: "heading" }, [
          _c("label", { attrs: { id: _vm.id + "-label", for: _vm.id } }, [
            _vm._v(_vm._s(_vm.label))
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "input ltr" },
      [
        _c("textarea-input", {
          attrs: {
            id: _vm.id,
            placeholder: _vm.placeholder,
            value: _vm.value,
            cols: _vm.cols
          },
          on: {
            input: function($event) {
              _vm.$emit("input", $event)
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b0d2231", module.exports)
  }
}

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['label', 'id', 'placeholder', 'value', 'size', 'errors', 'success'],

    components: {
        TextInput: __webpack_require__(33)
    }

});

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['id', 'placeholder', 'value', 'size', 'errors', 'success']

});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "input ltr",
      class: { errors: _vm.errors, success: _vm.success }
    },
    [
      _c("input", {
        staticClass: "text",
        class: { fullwidth: !_vm.size },
        attrs: {
          type: "text",
          autocomplete: "off",
          id: _vm.id,
          placeholder: _vm.placeholder,
          size: _vm.size
        },
        domProps: { value: _vm.value },
        on: {
          input: function($event) {
            _vm.$emit("input", $event.target.value)
          }
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7360f81e", module.exports)
  }
}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "field first" },
    [
      _vm.label
        ? _c("div", { staticClass: "heading" }, [
            _c("label", { attrs: { id: _vm.id + "-label", for: _vm.id } }, [
              _vm._v(_vm._s(_vm.label))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("text-input", {
        attrs: {
          id: _vm.id,
          placeholder: _vm.placeholder,
          value: _vm.value,
          size: _vm.size,
          errors: _vm.errors,
          success: _vm.success
        },
        on: {
          input: function($event) {
            _vm.$emit("input", $event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c775a1e", module.exports)
  }
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(262)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/CreditCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a82fb60", Component.options)
  } else {
    hotAPI.reload("data-v-7a82fb60", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        TextInput: __webpack_require__(33),
        Cleave: __webpack_require__(258)
    },

    data: function data() {
        return {
            number: '',
            exp: '',
            cvc: '',

            errors: {
                number: false,
                exp: false,
                cvc: false
            }
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        stripePublicKey: 'stripePublicKey'
    }), {
        expMonth: function expMonth() {
            var parts = this.exp.split('/');
            return parts[0];
        },
        expYear: function expYear() {
            var parts = this.exp.split('/');
            return parts[1];
        }
    }),

    methods: {
        save: function save(cb, cbError) {
            if (this.validates()) {
                Stripe.setPublishableKey(this.stripePublicKey);

                Stripe.source.create({
                    type: 'card',
                    card: {
                        number: this.number,
                        exp_month: this.expMonth,
                        exp_year: this.expYear,
                        cvc: this.cvc
                    }
                }, function (status, response) {
                    if (response.error) {
                        cbError(response);
                    } else {
                        cb(response);
                    }
                });
            } else {
                cbError();
            }
        },
        validates: function validates() {
            var hasErrors = false;
            this.errors.number = false;
            this.errors.exp = false;
            this.errors.cvc = false;

            if (!this.number) {
                this.errors.number = true;
                hasErrors = true;
            }

            if (!this.exp) {
                this.errors.exp = true;
                hasErrors = true;
            }

            if (!this.cvc) {
                this.errors.cvc = true;
                hasErrors = true;
            }

            return !hasErrors;
        }
    }

});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(259)
/* template */
var __vue_template__ = __webpack_require__(261)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-cleave/src/Cleave.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58a58c1c", Component.options)
  } else {
    hotAPI.reload("data-v-58a58c1c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cleave_js__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cleave_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cleave_js__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    events: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      cleave: null
    };
  },


  methods: {
    emitEvent: function emitEvent() {
      this.$emit('input', this.$el.value);
      this.$emit('rawValueChanged', this.cleave.getRawValue());
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$el.value = this.value;
    this.cleave = new __WEBPACK_IMPORTED_MODULE_0_cleave_js___default.a(this.$el, this.options);
    Object.keys(this.events).map(function (key) {
      _this.$refs.input.addEventListener(key, _this.events[key]);
    });
    if (this.options.maxLength) {
      this.$el.setAttribute('maxlength', this.options.maxLength);
    }

    // in case of cleave.js remove result or properties from cleave instance.
    if (this.cleave.properties && this.cleave.properties.hasOwnProperty('result')) {
      this.$watch('cleave.properties.result', this.emitEvent);
    } else {
      this.$el.addEventListener('input', this.emitEvent);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.cleave.destroy();
  },


  watch: {
    options: {
      deep: true,
      handler: function handler(val) {
        this.cleave.destroy();
        this.cleave = new __WEBPACK_IMPORTED_MODULE_0_cleave_js___default.a(this.$el, val);
      }
    }
  }

});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cleave"] = factory();
	else
		root["Cleave"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Construct a new Cleave instance by passing the configuration object
	 *
	 * @param {String / HTMLElement} element
	 * @param {Object} opts
	 */
	var Cleave = function (element, opts) {
	    var owner = this;

	    if (typeof element === 'string') {
	        owner.element = document.querySelector(element);
	    } else {
	        owner.element = ((typeof element.length !== 'undefined') && element.length > 0) ? element[0] : element;
	    }

	    if (!owner.element) {
	        throw new Error('[cleave.js] Please check the element');
	    }

	    opts.initValue = owner.element.value;

	    owner.properties = Cleave.DefaultProperties.assign({}, opts);

	    owner.init();
	};

	Cleave.prototype = {
	    init: function () {
	        var owner = this, pps = owner.properties;

	        // no need to use this lib
	        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.date && (pps.blocksLength === 0 && !pps.prefix)) {
	            return;
	        }

	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);

	        owner.isAndroid = Cleave.Util.isAndroid();
	        owner.lastInputValue = '';

	        owner.onChangeListener = owner.onChange.bind(owner);
	        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
	        owner.onCutListener = owner.onCut.bind(owner);
	        owner.onCopyListener = owner.onCopy.bind(owner);

	        owner.element.addEventListener('input', owner.onChangeListener);
	        owner.element.addEventListener('keydown', owner.onKeyDownListener);
	        owner.element.addEventListener('cut', owner.onCutListener);
	        owner.element.addEventListener('copy', owner.onCopyListener);


	        owner.initPhoneFormatter();
	        owner.initDateFormatter();
	        owner.initNumeralFormatter();

	        owner.onInput(pps.initValue);
	    },

	    initNumeralFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.numeral) {
	            return;
	        }

	        pps.numeralFormatter = new Cleave.NumeralFormatter(
	            pps.numeralDecimalMark,
	            pps.numeralIntegerScale,
	            pps.numeralDecimalScale,
	            pps.numeralThousandsGroupStyle,
	            pps.numeralPositiveOnly,
	            pps.delimiter
	        );
	    },

	    initDateFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.date) {
	            return;
	        }

	        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern);
	        pps.blocks = pps.dateFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
	    },

	    initPhoneFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.phone) {
	            return;
	        }

	        // Cleave.AsYouTypeFormatter should be provided by
	        // external google closure lib
	        try {
	            pps.phoneFormatter = new Cleave.PhoneFormatter(
	                new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
	                pps.delimiter
	            );
	        } catch (ex) {
	            throw new Error('[cleave.js] Please include phone-type-formatter.{country}.js lib');
	        }
	    },

	    onKeyDown: function (event) {
	        var owner = this, pps = owner.properties,
	            charCode = event.which || event.keyCode,
	            Util = Cleave.Util,
	            currentValue = owner.element.value;

	        if (Util.isAndroidBackspaceKeydown(owner.lastInputValue, currentValue)) {
	            charCode = 8;
	        }

	        owner.lastInputValue = currentValue;

	        // hit backspace when last character is delimiter
	        if (charCode === 8 && Util.isDelimiter(currentValue.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	            pps.backspace = true;

	            return;
	        }

	        pps.backspace = false;
	    },

	    onChange: function () {
	        this.onInput(this.element.value);
	    },

	    onCut: function (e) {
	        this.copyClipboardData(e);
	        this.onInput('');
	    },

	    onCopy: function (e) {
	        this.copyClipboardData(e);
	    },

	    copyClipboardData: function (e) {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            inputValue = owner.element.value,
	            textToCopy = '';

	        if (!pps.copyDelimiter) {
	            textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
	        } else {
	            textToCopy = inputValue;
	        }

	        try {
	            if (e.clipboardData) {
	                e.clipboardData.setData('Text', textToCopy);
	            } else {
	                window.clipboardData.setData('Text', textToCopy);
	            }

	            e.preventDefault();
	        } catch (ex) {
	            //  empty
	        }
	    },

	    onInput: function (value) {
	        var owner = this, pps = owner.properties,
	            prev = value,
	            Util = Cleave.Util;

	        // case 1: delete one more character "4"
	        // 1234*| -> hit backspace -> 123|
	        // case 2: last character is not delimiter which is:
	        // 12|34* -> hit backspace -> 1|34*
	        // note: no need to apply this for numeral mode
	        if (!pps.numeral && pps.backspace && !Util.isDelimiter(value.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	            value = Util.headStr(value, value.length - pps.delimiterLength);
	        }

	        // phone formatter
	        if (pps.phone) {
	            pps.result = pps.phoneFormatter.format(value);
	            owner.updateValueState();

	            return;
	        }

	        // numeral formatter
	        if (pps.numeral) {
	            pps.result = pps.prefix + pps.numeralFormatter.format(value);
	            owner.updateValueState();

	            return;
	        }

	        // date
	        if (pps.date) {
	            value = pps.dateFormatter.getValidatedDate(value);
	        }

	        // strip delimiters
	        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

	        // strip prefix
	        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength);

	        // strip non-numeric characters
	        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

	        // convert case
	        value = pps.uppercase ? value.toUpperCase() : value;
	        value = pps.lowercase ? value.toLowerCase() : value;

	        // prefix
	        if (pps.prefix) {
	            value = pps.prefix + value;

	            // no blocks specified, no need to do formatting
	            if (pps.blocksLength === 0) {
	                pps.result = value;
	                owner.updateValueState();

	                return;
	            }
	        }

	        // update credit card props
	        if (pps.creditCard) {
	            owner.updateCreditCardPropsByValue(value);
	        }

	        // strip over length characters
	        value = Util.headStr(value, pps.maxLength);

	        // apply blocks
	        pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters);

	        // nothing changed
	        // prevent update value to avoid caret position change
	        if (prev === pps.result && prev !== pps.prefix) {
	            return;
	        }

	        owner.updateValueState();
	    },

	    updateCreditCardPropsByValue: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util,
	            creditCardInfo;

	        // At least one of the first 4 characters has changed
	        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
	            return;
	        }

	        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

	        pps.blocks = creditCardInfo.blocks;
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        // credit card type changed
	        if (pps.creditCardType !== creditCardInfo.type) {
	            pps.creditCardType = creditCardInfo.type;

	            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	        }
	    },

	    updateValueState: function () {
	        var owner = this;

	        // fix Android browser type="text" input field
	        // cursor not jumping issue
	        if (owner.isAndroid) {
	            window.setTimeout(function () {
	                owner.element.value = owner.properties.result;
	            }, 1);

	            return;
	        }

	        owner.element.value = owner.properties.result;
	    },

	    setPhoneRegionCode: function (phoneRegionCode) {
	        var owner = this, pps = owner.properties;

	        pps.phoneRegionCode = phoneRegionCode;
	        owner.initPhoneFormatter();
	        owner.onChange();
	    },

	    setRawValue: function (value) {
	        var owner = this, pps = owner.properties;

	        value = value !== undefined && value !== null ? value.toString() : '';

	        if (pps.numeral) {
	            value = value.replace('.', pps.numeralDecimalMark);
	        }

	        owner.element.value = value;
	        owner.onInput(value);
	    },

	    getRawValue: function () {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            rawValue = owner.element.value;

	        if (pps.rawValueTrimPrefix) {
	            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength);
	        }

	        if (pps.numeral) {
	            rawValue = pps.numeralFormatter.getRawValue(rawValue);
	        } else {
	            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	        }

	        return rawValue;
	    },

	    getFormattedValue: function () {
	        return this.element.value;
	    },

	    destroy: function () {
	        var owner = this;

	        owner.element.removeEventListener('input', owner.onChangeListener);
	        owner.element.removeEventListener('keydown', owner.onKeyDownListener);
	        owner.element.removeEventListener('cut', owner.onCutListener);
	        owner.element.removeEventListener('copy', owner.onCopyListener);
	    },

	    toString: function () {
	        return '[Cleave Object]';
	    }
	};

	Cleave.NumeralFormatter = __webpack_require__(1);
	Cleave.DateFormatter = __webpack_require__(2);
	Cleave.PhoneFormatter = __webpack_require__(3);
	Cleave.CreditCardDetector = __webpack_require__(4);
	Cleave.Util = __webpack_require__(5);
	Cleave.DefaultProperties = __webpack_require__(6);

	// for angular directive
	((typeof global === 'object' && global) ? global : window)['Cleave'] = Cleave;

	// CommonJS
	module.exports = Cleave;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var NumeralFormatter = function (numeralDecimalMark,
	                                 numeralIntegerScale,
	                                 numeralDecimalScale,
	                                 numeralThousandsGroupStyle,
	                                 numeralPositiveOnly,
	                                 delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale >= 0 ? numeralIntegerScale : 10;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh:     'lakh',
	    wan:      'wan'
	};

	NumeralFormatter.prototype = {
	    getRawValue: function (value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function (value) {
	        var owner = this, parts, partInteger, partDecimal = '';

	        // strip alphabet letters
	        value = value.replace(/[A-Za-z]/g, '')
	            // replace the first decimal mark with reserved placeholder
	            .replace(owner.numeralDecimalMark, 'M')

	            // strip non numeric letters except minus and "M"
	            // this is to ensure prefix has been stripped
	            .replace(/[^\dM-]/g, '')

	            // replace the leading minus with reserved placeholder
	            .replace(/^\-/, 'N')

	            // strip the other minus sign (if present)
	            .replace(/\-/g, '')

	            // replace the minus sign (if present)
	            .replace('N', owner.numeralPositiveOnly ? '' : '-')

	            // replace decimal mark
	            .replace('M', owner.numeralDecimalMark)

	            // strip any leading zeros
	            .replace(/^(-)?0+(?=\d)/, '$1');

	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if (owner.numeralIntegerScale > 0) {
	          partInteger = partInteger.slice(0, owner.numeralIntegerScale + (value.slice(0, 1) === '-' ? 1 : 0));
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	        case NumeralFormatter.groupStyle.lakh:
	            partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.wan:
	            partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	            break;

	        default:
	            partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);
	        }

	        return partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var DateFormatter = function (datePattern) {
	    var owner = this;

	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function () {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getBlocks: function () {
	        return this.blocks;
	    },

	    getValidatedDate: function (value) {
	        var owner = this, result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                case 'd':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 3) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 31) {
	                        sub = '31';
	                    }

	                    break;

	                case 'm':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 1) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 12) {
	                        sub = '12';
	                    }

	                    break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    }
	};

	module.exports = DateFormatter;



/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var PhoneFormatter = function (formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function (formatter) {
	        this.formatter = formatter;
	    },

	    format: function (phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	        // only keep number and +
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	        // strip delimiter
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '', current, validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	            // has ()- or space inside
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	                // else: over length input
	                // it turns to invalid number again
	            }
	        }

	        // strip ()
	        // e.g. US: 7161234567 returns (716) 123-4567
	        result = result.replace(/[()]/g, '');
	        // replace library delimiter with user customized delimiter
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;



/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var CreditCardDetector = {
	    blocks: {
	        uatp:          [4, 5, 6],
	        amex:          [4, 6, 5],
	        diners:        [4, 6, 4],
	        discover:      [4, 4, 4, 4],
	        mastercard:    [4, 4, 4, 4],
	        dankort:       [4, 4, 4, 4],
	        instapayment:  [4, 4, 4, 4],
	        jcb:           [4, 4, 4, 4],
	        maestro:       [4, 4, 4, 4],
	        visa:          [4, 4, 4, 4],
	        general:       [4, 4, 4, 4],
	        generalStrict: [4, 4, 4, 7]
	    },

	    re: {
	        // starts with 1; 15 digits, not starts with 1800 (jcb card)
	        uatp: /^(?!1800)1\d{0,14}/,

	        // starts with 34/37; 15 digits
	        amex: /^3[47]\d{0,13}/,

	        // starts with 6011/65/644-649; 16 digits
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	        // starts with 300-305/309 or 36/38/39; 14 digits
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	        // starts with 51-55/22-27; 16 digits
	        mastercard: /^(5[1-5]|2[2-7])\d{0,14}/,

	        // starts with 5019/4175/4571; 16 digits
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	        // starts with 637-639; 16 digits
	        instapayment: /^63[7-9]\d{0,13}/,

	        // starts with 2131/1800/35; 16 digits
	        jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,

	        // starts with 50/56-58/6304/67; 16 digits
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

	        // starts with 4; 16 digits
	        visa: /^4\d{0,15}/
	    },

	    getInfo: function (value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	        // In theory, visa credit card can have up to 19 digits number.
	        // Set strictMode to true will remove the 16 max-length restrain,
	        // however, I never found any website validate card number like
	        // this, hence probably you don't need to enable this option.
	        strictMode = !!strictMode;

	        if (re.amex.test(value)) {
	            return {
	                type:   'amex',
	                blocks: blocks.amex
	            };
	        } else if (re.uatp.test(value)) {
	            return {
	                type:   'uatp',
	                blocks: blocks.uatp
	            };
	        } else if (re.diners.test(value)) {
	            return {
	                type:   'diners',
	                blocks: blocks.diners
	            };
	        } else if (re.discover.test(value)) {
	            return {
	                type:   'discover',
	                blocks: strictMode ? blocks.generalStrict : blocks.discover
	            };
	        } else if (re.mastercard.test(value)) {
	            return {
	                type:   'mastercard',
	                blocks: blocks.mastercard
	            };
	        } else if (re.dankort.test(value)) {
	            return {
	                type:   'dankort',
	                blocks: blocks.dankort
	            };
	        } else if (re.instapayment.test(value)) {
	            return {
	                type:   'instapayment',
	                blocks: blocks.instapayment
	            };
	        } else if (re.jcb.test(value)) {
	            return {
	                type:   'jcb',
	                blocks: blocks.jcb
	            };
	        } else if (re.maestro.test(value)) {
	            return {
	                type:   'maestro',
	                blocks: strictMode ? blocks.generalStrict : blocks.maestro
	            };
	        } else if (re.visa.test(value)) {
	            return {
	                type:   'visa',
	                blocks: strictMode ? blocks.generalStrict : blocks.visa
	            };
	        } else {
	            return {
	                type:   'unknown',
	                blocks: strictMode ? blocks.generalStrict : blocks.general
	            };
	        }
	    }
	};

	module.exports = CreditCardDetector;



/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var Util = {
	    noop: function () {
	    },

	    strip: function (value, re) {
	        return value.replace(re, '');
	    },

	    isDelimiter: function (letter, delimiter, delimiters) {
	        // single delimiter
	        if (delimiters.length === 0) {
	            return letter === delimiter;
	        }

	        // multiple delimiters
	        return delimiters.some(function (current) {
	            if (letter === current) {
	                return true;
	            }
	        });
	    },

	    getDelimiterREByDelimiter: function (delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    stripDelimiters: function (value, delimiter, delimiters) {
	        var owner = this;

	        // single delimiter
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	        // multiple delimiters
	        delimiters.forEach(function (current) {
	            value = value.replace(owner.getDelimiterREByDelimiter(current), '');
	        });

	        return value;
	    },

	    headStr: function (str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function (blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	    // strip value by prefix length
	    // for prefix: PRE
	    // (PRE123, 3) -> 123
	    // (PR123, 3) -> 23 this happens when user hits backspace in front of "PRE"
	    getPrefixStrippedValue: function (value, prefix, prefixLength) {
	        if (value.slice(0, prefixLength) !== prefix) {
	            var diffIndex = this.getFirstDiffIndex(prefix, value.slice(0, prefixLength));

	            value = prefix + value.slice(diffIndex, diffIndex + 1) + value.slice(prefixLength + 1);
	        }

	        return value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function (prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index))
	            if (prev.charAt(index++) === '')
	                return -1;

	        return index;
	    },

	    getFormattedValue: function (value, blocks, blocksLength, delimiter, delimiters) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter;

	        // no options, normal input
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                result += sub;

	                currentDelimiter = multipleDelimiters ? (delimiters[index] || currentDelimiter) : delimiter;

	                if (sub.length === length && index < blocksLength - 1) {
	                    result += currentDelimiter;
	                }

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    },

	    isAndroid: function () {
	        if (navigator && /android/i.test(navigator.userAgent)) {
	            return true;
	        }

	        return false;
	    },

	    // On Android chrome, the keyup and keydown events
	    // always return key code 229 as a composition that
	    // buffers the user’s keystrokes
	    // see https://github.com/nosir/cleave.js/issues/147
	    isAndroidBackspaceKeydown: function (lastInputValue, currentInputValue) {
	        if (!this.isAndroid()) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Props Assignment
	 *
	 * Separate this, so react module can share the usage
	 */
	var DefaultProperties = {
	    // Maybe change to object-assign
	    // for now just keep it as simple
	    assign: function (target, opts) {
	        target = target || {};
	        opts = opts || {};

	        // credit card
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || (function () {});

	        // phone
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	        // date
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateFormatter = {};

	        // numeral
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale >= 0 ? opts.numeralIntegerScale : 10;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;

	        // others
	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = (target.creditCard || target.phone || target.date) ? '' : (opts.prefix || '');
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = opts.initValue === undefined ? '' : opts.initValue.toString();

	        target.delimiter =
	            (opts.delimiter || opts.delimiter === '') ? opts.delimiter :
	                (opts.date ? '/' :
	                    (opts.numeral ? ',' :
	                        (opts.phone ? ' ' :
	                            ' ')));
	        target.delimiterLength = target.delimiter.length;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof global === 'object' && global) ? global : window;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        return target;
	    }
	};

	module.exports = DefaultProperties;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", { ref: "input", attrs: { type: "text" } })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58a58c1c", module.exports)
  }
}

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field card" }, [
    _c("div", { staticClass: "multitext" }, [
      _c(
        "div",
        { staticClass: "multitextrow" },
        [
          _c("cleave", {
            staticClass: "text fullwidth",
            class: { error: _vm.errors.number },
            attrs: {
              type: "tel",
              id: "cc-number",
              autocomplete: "off",
              placeholder: "Card number",
              options: { creditCard: true }
            },
            model: {
              value: _vm.number,
              callback: function($$v) {
                _vm.number = $$v
              },
              expression: "number"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "multitextrow" },
        [
          _c("cleave", {
            staticClass: "text fullwidth",
            class: { error: _vm.errors.exp },
            attrs: {
              type: "tel",
              id: "cc-exp",
              autocomplete: "off",
              placeholder: "MM / YY",
              options: { date: true, datePattern: ["m", "y"] }
            },
            model: {
              value: _vm.exp,
              callback: function($$v) {
                _vm.exp = $$v
              },
              expression: "exp"
            }
          }),
          _vm._v(" "),
          _c("cleave", {
            staticClass: "text fullwidth",
            class: { error: _vm.errors.cvc },
            attrs: {
              id: "cc-cvc",
              autocomplete: "off",
              placeholder: "CVC",
              options: { numericOnly: true, blocks: [4] }
            },
            model: {
              value: _vm.cvc,
              callback: function($$v) {
                _vm.cvc = $$v
              },
              expression: "cvc"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7a82fb60", module.exports)
  }
}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(264)
/* template */
var __vue_template__ = __webpack_require__(265)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/inputs/SelectInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-344baaef", Component.options)
  } else {
    hotAPI.reload("data-v-344baaef", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['options', 'value', 'errors']

});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "input", class: { errors: _vm.errors } }, [
    _c("div", { staticClass: "select" }, [
      _c(
        "select",
        {
          domProps: { value: _vm.value },
          on: {
            input: function($event) {
              _vm.$emit("input", $event.target.value)
            }
          }
        },
        _vm._l(this.options, function(option) {
          return _c("option", { domProps: { value: option.value } }, [
            _vm._v(_vm._s(option.label))
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-344baaef", module.exports)
  }
}

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "payment",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.checkout()
          }
        }
      },
      [
        _c("div", { staticClass: "blocks" }, [
          _c(
            "div",
            { staticClass: "block" },
            [
              _vm.cartTotal > 0
                ? _c(
                    "div",
                    [
                      _c("h2", [
                        _vm._v(_vm._s(_vm._f("t")("Payment Method", "app")))
                      ]),
                      _vm._v(" "),
                      _vm.craftIdAccount
                        ? [
                            _vm.craftIdAccount && _vm.craftIdAccount.card
                              ? _c("p", [
                                  _c("label", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.paymentMode,
                                          expression: "paymentMode"
                                        }
                                      ],
                                      attrs: {
                                        type: "radio",
                                        value: "existingCard"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.paymentMode,
                                          "existingCard"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.paymentMode = "existingCard"
                                        }
                                      }
                                    }),
                                    _vm._v(" Use card "),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.craftIdAccount.card.brand) +
                                          " •••• •••• •••• " +
                                          _vm._s(
                                            _vm.craftIdAccount.card.last4
                                          ) +
                                          " — " +
                                          _vm._s(
                                            _vm.craftIdAccount.card.exp_month
                                          ) +
                                          "/" +
                                          _vm._s(
                                            _vm.craftIdAccount.card.exp_year
                                          )
                                      )
                                    ])
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("p", [
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.paymentMode,
                                      expression: "paymentMode"
                                    }
                                  ],
                                  attrs: { type: "radio", value: "newCard" },
                                  domProps: {
                                    checked: _vm._q(_vm.paymentMode, "newCard")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.paymentMode = "newCard"
                                    }
                                  }
                                }),
                                _vm._v(" Use a new credit card")
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.paymentMode === "newCard"
                              ? [
                                  !_vm.cardToken
                                    ? _c("credit-card", { ref: "newCard" })
                                    : _c("p", [
                                        _vm._v(
                                          _vm._s(_vm.cardToken.card.brand) +
                                            " •••• •••• •••• " +
                                            _vm._s(_vm.cardToken.card.last4) +
                                            " (" +
                                            _vm._s(
                                              _vm.cardToken.card.exp_month
                                            ) +
                                            "/" +
                                            _vm._s(
                                              _vm.cardToken.card.exp_year
                                            ) +
                                            ") "
                                        ),
                                        _c("a", {
                                          staticClass: "delete icon",
                                          on: {
                                            click: function($event) {
                                              _vm.cardToken = null
                                            }
                                          }
                                        })
                                      ]),
                                  _vm._v(" "),
                                  _c("checkbox-field", {
                                    attrs: {
                                      id: "replaceCard",
                                      label: "Save as my new credit card"
                                    },
                                    model: {
                                      value: _vm.replaceCard,
                                      callback: function($$v) {
                                        _vm.replaceCard = $$v
                                      },
                                      expression: "replaceCard"
                                    }
                                  })
                                ]
                              : _vm._e()
                          ]
                        : [_c("credit-card", { ref: "guestCard" })]
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("h2", [_vm._v(_vm._s(_vm._f("t")("Coupon Code", "app")))]),
              _vm._v(" "),
              _c("text-field", {
                attrs: {
                  placeholder: "XXXXXXX",
                  id: "coupon-code",
                  size: "12",
                  errors: _vm.couponCodeError
                },
                on: { input: _vm.couponCodeChange },
                model: {
                  value: _vm.couponCode,
                  callback: function($$v) {
                    _vm.couponCode = $$v
                  },
                  expression: "couponCode"
                }
              }),
              _vm._v(" "),
              _vm.couponCodeLoading
                ? _c("div", { staticClass: "spinner" })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h2", [_vm._v(_vm._s(_vm._f("t")("Billing", "app")))]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c("div", { staticClass: "input" }, [
                _c("div", { staticClass: "multitext" }, [
                  _c(
                    "div",
                    { staticClass: "multitextrow" },
                    [
                      _c("text-input", {
                        attrs: {
                          placeholder: "First Name",
                          id: "first-name",
                          errors: _vm.errors["billingAddress.firstName"]
                        },
                        model: {
                          value: _vm.billingInfo.firstName,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "firstName", $$v)
                          },
                          expression: "billingInfo.firstName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "multitextrow" },
                    [
                      _c("text-input", {
                        attrs: {
                          placeholder: "Last Name",
                          id: "last-name",
                          errors: _vm.errors["billingAddress.lastName"]
                        },
                        model: {
                          value: _vm.billingInfo.lastName,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "lastName", $$v)
                          },
                          expression: "billingInfo.lastName"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c("div", { staticClass: "input" }, [
                _c("div", { staticClass: "multitext" }, [
                  _c(
                    "div",
                    { staticClass: "multitextrow" },
                    [
                      _c("text-input", {
                        attrs: {
                          placeholder: "Business Name",
                          id: "business-name",
                          errors: _vm.errors["billingAddress.businessName"]
                        },
                        model: {
                          value: _vm.billingInfo.businessName,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "businessName", $$v)
                          },
                          expression: "billingInfo.businessName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "multitextrow" },
                    [
                      _c("text-input", {
                        attrs: {
                          placeholder: "Business Tax ID",
                          id: "business-tax-id",
                          errors: _vm.errors["billingAddress.businessTaxId"]
                        },
                        model: {
                          value: _vm.billingInfo.businessTaxId,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "businessTaxId", $$v)
                          },
                          expression: "billingInfo.businessTaxId"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c("div", { staticClass: "input" }, [
                _c("div", { staticClass: "multitext" }, [
                  _c(
                    "div",
                    { staticClass: "multitextrow" },
                    [
                      _c("text-input", {
                        attrs: {
                          placeholder: "Address Line 1",
                          id: "address-1",
                          errors: _vm.errors["billingAddress.address1"]
                        },
                        model: {
                          value: _vm.billingInfo.address1,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "address1", $$v)
                          },
                          expression: "billingInfo.address1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "multitextrow" },
                    [
                      _c("text-input", {
                        attrs: {
                          placeholder: "Address Line 2",
                          id: "address-2",
                          errors: _vm.errors["billingAddress.address2"]
                        },
                        model: {
                          value: _vm.billingInfo.address2,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "address2", $$v)
                          },
                          expression: "billingInfo.address2"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "multitextrow" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.billingInfo.city,
                          expression: "billingInfo.city"
                        }
                      ],
                      staticClass: "text",
                      class: { error: _vm.errors["billingAddress.city"] },
                      attrs: { type: "text", placeholder: "City", id: "city" },
                      domProps: { value: _vm.billingInfo.city },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.billingInfo, "city", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.billingInfo.zipCode,
                          expression: "billingInfo.zipCode"
                        }
                      ],
                      staticClass: "text",
                      class: { error: _vm.errors["billingAddress.zipCode"] },
                      attrs: {
                        type: "text",
                        placeholder: "Zip Code",
                        id: "zip-code"
                      },
                      domProps: { value: _vm.billingInfo.zipCode },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.billingInfo,
                            "zipCode",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "multiselectrow" },
                    [
                      _c("select-input", {
                        attrs: {
                          options: _vm.countryOptions,
                          errors: _vm.errors["billingAddress.country"]
                        },
                        on: { input: _vm.onCountryChange },
                        model: {
                          value: _vm.billingInfo.country,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "country", $$v)
                          },
                          expression: "billingInfo.country"
                        }
                      }),
                      _vm._v(" "),
                      _c("select-input", {
                        attrs: {
                          options: _vm.stateOptions,
                          errors: _vm.errors["billingAddress.state"]
                        },
                        model: {
                          value: _vm.billingInfo.state,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "state", $$v)
                          },
                          expression: "billingInfo.state"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "centeralign" }, [
          _vm.error
            ? _c("p", { staticClass: "error" }, [_vm._v(_vm._s(_vm.error))])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            staticClass: "btn submit",
            attrs: { type: "submit" },
            domProps: {
              value:
                _vm.$options.filters.t("Pay", "app") +
                " " +
                _vm.$options.filters.currency(_vm.staticCartTotal)
            }
          }),
          _vm._v(" "),
          _vm.loading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: { src: _vm.craftData.poweredByStripe, height: "18" }
            })
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f9e3d6f", module.exports)
  }
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(268)
/* template */
var __vue_template__ = __webpack_require__(269)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/ThankYou.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b392f988", Component.options)
  } else {
    hotAPI.reload("data-v-b392f988", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {
        lastOrder: function lastOrder() {
            return this.$root.lastOrder;
        },
        managePluginsUrl: function managePluginsUrl() {
            return Craft.getCpUrl('settings/plugins');
        }
    },

    mounted: function mounted() {
        if (!this.lastOrder) {
            this.$router.push({ path: '/' });
        }
    }
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { attrs: { id: "thank-you" } }, [
      _c("div", {
        staticClass: "spinner big success",
        attrs: { id: "graphic" }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v(_vm._s(_vm._f("t")("Thank You!", "app")))]),
      _vm._v(" "),
      _c("p", { staticClass: "light" }, [
        _vm._v(
          _vm._s(
            _vm._f("t")(
              "Your order has been processed, you will receive an email shortly containing your license keys.",
              "app"
            )
          )
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          { staticClass: "btn submit", attrs: { href: _vm.managePluginsUrl } },
          [_vm._v(_vm._s(_vm._f("t")("Manage your plugins", "app")))]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b392f988", module.exports)
  }
}

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(271)
/* template */
var __vue_template__ = __webpack_require__(272)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/web/assets/pluginstore/src/js/components/Identity.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65937ab6", Component.options)
  } else {
    hotAPI.reload("data-v-65937ab6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        TextField: __webpack_require__(68)
    },

    data: function data() {
        return {
            loading: false,
            guestEmail: '',
            guestEmailError: false
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        craftIdAccount: 'craftIdAccount',
        cart: 'cart'
    }), {

        identityMode: {
            get: function get() {
                return this.$store.state.cart.identityMode;
            },
            set: function set(value) {
                this.$store.commit("CHANGE_IDENTITY_MODE", value);
            }
        },

        validates: function validates() {
            if (this.identityMode === 'craftid' && !this.craftIdAccount) {
                return false;
            }

            if (this.identityMode === 'guest' && !this.guestEmail) {
                return false;
            }

            return true;
        }
    }),

    methods: {
        connectCraftId: function connectCraftId() {
            var width = 800;
            var height = 600;

            var winWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            var winHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

            var left = winWidth / 2 - width / 2;
            var top = winHeight / 2 - height / 2;

            var url = Craft.getActionUrl('plugin-store/connect', { redirectUrl: Craft.getActionUrl('plugin-store/modal-callback') });
            var name = 'ConnectWithOauth';
            var specs = 'location=0,status=0,width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;

            window.open(url, name, specs);
        },
        save: function save() {
            var _this = this;

            this.loading = true;

            if (this.identityMode === 'guest') {
                var data = {
                    email: this.guestEmail
                };

                this.$store.dispatch('saveCart', data).then(function () {
                    _this.loading = false;
                    _this.$root.openGlobalModal('payment');
                }).catch(function () {
                    _this.loading = false;
                    _this.$root.displayError("Couldn't save identity.");
                });
            } else {
                this.loading = false;
                this.$root.openGlobalModal('payment');
            }
        }
    },

    mounted: function mounted() {
        this.$root.$on('craftIdUpdated', function () {
            if (this.craftIdAccount) {
                this.$root.openGlobalModal('payment');
            }
        }.bind(this));

        this.guestEmail = this.cart.email;
    }
});

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.save()
        }
      }
    },
    [
      _c("p", [
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.identityMode,
                expression: "identityMode"
              }
            ],
            attrs: { type: "radio", value: "craftid" },
            domProps: { checked: _vm._q(_vm.identityMode, "craftid") },
            on: {
              change: function($event) {
                _vm.identityMode = "craftid"
              }
            }
          }),
          _vm._v(" " + _vm._s(_vm._f("t")("Use your Craft ID", "app")))
        ])
      ]),
      _vm._v(" "),
      _vm.identityMode === "craftid"
        ? [
            _vm.craftIdAccount
              ? [
                  _c("ul", [
                    _c("li", [_vm._v(_vm._s(_vm.craftIdAccount.name))]),
                    _vm._v(" "),
                    _c("li", [_vm._v(_vm._s(_vm.craftIdAccount.email))])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "btn submit",
                    class: { disabled: !_vm.validates || _vm.loading },
                    attrs: {
                      type: "submit",
                      value: "Continue",
                      disabled: !_vm.validates || _vm.loading
                    }
                  })
                ]
              : _c("p", [
                  _c(
                    "a",
                    {
                      staticClass: "btn submit",
                      on: { click: _vm.connectCraftId }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm._f("t")("Connect to your Craft ID", "app"))
                      )
                    ]
                  )
                ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("p", [
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.identityMode,
                expression: "identityMode"
              }
            ],
            attrs: { type: "radio", value: "guest" },
            domProps: { checked: _vm._q(_vm.identityMode, "guest") },
            on: {
              change: function($event) {
                _vm.identityMode = "guest"
              }
            }
          }),
          _vm._v(" " + _vm._s(_vm._f("t")("Continue as guest", "app")))
        ])
      ]),
      _vm._v(" "),
      _vm.identityMode === "guest"
        ? [
            _c("text-field", {
              attrs: {
                id: "email",
                placeholder: "Email",
                errors: _vm.guestEmailError
              },
              model: {
                value: _vm.guestEmail,
                callback: function($$v) {
                  _vm.guestEmail = $$v
                },
                expression: "guestEmail"
              }
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn submit",
              class: { disabled: !_vm.validates || _vm.loading },
              attrs: {
                type: "submit",
                disabled: !_vm.validates || _vm.loading
              },
              domProps: { value: _vm.$options.filters.t("Continue", "app") }
            })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.loading ? _c("div", { staticClass: "spinner" }) : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-65937ab6", module.exports)
  }
}

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hidden" }, [
    _c("div", { ref: "globalmodal", staticClass: "globalmodal modal" }, [
      _c(
        "div",
        { staticClass: "globalmodalcontent" },
        [
          _vm.modalStep === "plugin-details"
            ? [_c("plugin-details", { attrs: { pluginId: _vm.pluginId } })]
            : _vm.modalStep === "cart"
              ? [
                  _vm._m(0, false, false),
                  _vm._v(" "),
                  _c("div", { staticClass: "body" }, [
                    _c(
                      "div",
                      { staticClass: "content" },
                      [
                        _c("cart", {
                          on: {
                            "continue-shopping": function($event) {
                              _vm.$root.closeGlobalModal()
                            }
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              : _vm.modalStep === "identity"
                ? [
                    _c("header", { staticClass: "header" }, [
                      _c("div", { staticClass: "btn-left" }, [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                _vm.back()
                              }
                            }
                          },
                          [_vm._v("← Back")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("h1", [_vm._v("Identity")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body" }, [
                      _c("div", { staticClass: "content" }, [_c("identity")], 1)
                    ])
                  ]
                : _vm.modalStep === "payment"
                  ? [
                      _c("header", { staticClass: "header" }, [
                        _c("div", { staticClass: "btn-left" }, [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  _vm.back()
                                }
                              }
                            },
                            [_vm._v("← Back")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("h1", [_vm._v("Payment")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "body" }, [
                        _c(
                          "div",
                          { staticClass: "content" },
                          [_c("payment")],
                          1
                        )
                      ])
                    ]
                  : _vm.modalStep === "thankYou"
                    ? [_c("div", { staticClass: "body" }, [_c("thank-you")], 1)]
                    : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "header" }, [_c("h1", [_vm._v("Cart")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c268db3", module.exports)
  }
}

/***/ }),
/* 274 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);