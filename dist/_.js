(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g._ = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var type = require('./type');

var isArray = require('./isArray');

var isBoolean = require('./isBoolean');

var isFunction = require('./isFunction');

var isNull = require('./isNull');

var isNumber = require('./isNumber');

var isObject = require('./isObject');

var isPlainObject = require('./isPlainObject');

var isRegExp = require('./isRegExp');

var isString = require('./isString');

var isInteger = require('./isInteger');

var isNaN = require('./isNaN');

var isSafeInteger = require('./isSafeInteger');

var isBrowser = require('./isBrowser');

var noop = require('./noop');

var _ = {
  /* Type */
  isArray: isArray,
  isBoolean: isBoolean,
  isFunction: isFunction,
  isNull: isNull,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isRegExp: isRegExp,
  isString: isString,
  type: type,

  /* Number Type */
  isInteger: isInteger,
  isNaN: isNaN,
  isSafeInteger: isSafeInteger,

  /* Env */
  isBrowser: isBrowser,

  /* Util */
  noop: noop
};
module.exports = _;
},{"./isArray":2,"./isBoolean":3,"./isBrowser":4,"./isFunction":5,"./isInteger":6,"./isNaN":7,"./isNull":8,"./isNumber":9,"./isObject":10,"./isPlainObject":11,"./isRegExp":12,"./isSafeInteger":13,"./isString":14,"./noop":20,"./type":21}],2:[function(require,module,exports){
"use strict";

/**
 * isArray
 *
 * @since 1.0.0
 * @param array
 * @returns {boolean}
 */
require('js-polyfill/Array.isArray');

module.exports = Array.isArray;
},{"js-polyfill/Array.isArray":15}],3:[function(require,module,exports){
"use strict";

/**
 * isBoolean
 *
 * @since 1.0.0
 * @param bool
 * @returns {boolean}
 */
function isBoolean(bool) {
  // typeof val is faster than Object.prototype.toString.call(val)
  return typeof bool === 'boolean';
}

module.exports = isBoolean;
},{}],4:[function(require,module,exports){
"use strict";

/**
 * isBrowser
 *
 * @since 1.0.0
 * @return {boolean}
 */
var isBrowser = typeof window !== 'undefined';

module.exports = function () {
  return isBrowser;
};
},{}],5:[function(require,module,exports){
"use strict";

/**
 * isFunction
 *
 * @since 1.0.0
 * @param fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === 'function' || Object.prototype.toString.call(fn) === '[object Function]';
}

module.exports = isFunction;
},{}],6:[function(require,module,exports){
"use strict";

/**
 * isInteger
 *
 * @since 1.0.0
 * @param number
 * @return {boolean}
 */
require('js-polyfill/Number.isInteger');

module.exports = Number.isInteger;
},{"js-polyfill/Number.isInteger":17}],7:[function(require,module,exports){
"use strict";

/**
 * isNaN
 *
 * @since 1.0.0
 * @param num
 * @return {boolean}
 */
require('js-polyfill/Number.isNaN');

module.exports = function (num) {
  if (typeof num === 'undefined') {
    num = null;
  }

  return Number.isNaN(+num);
};
},{"js-polyfill/Number.isNaN":18}],8:[function(require,module,exports){
"use strict";

/**
 * isNull
 *
 * @since 1.0.0
 * @param val
 * @returns {boolean}
 */
function isNull(val) {
  // val === null is faster than Object.prototype.toString.call(val)
  return val === null;
}

module.exports = isNull;
},{}],9:[function(require,module,exports){
"use strict";

/**
 * isNumber
 *
 * @since 1.0.0
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
  // typeof val is faster than Object.prototype.toString.call(val)
  return typeof num === 'number';
}

module.exports = isNumber;
},{}],10:[function(require,module,exports){
"use strict";

/**
 * isObject
 *
 * @since 1.0.0
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
  return obj instanceof Object;
}

module.exports = isObject;
},{}],11:[function(require,module,exports){
"use strict";

/**
 * isPlainObject
 *
 * @since 1.0.0
 * @param obj
 * @returns {boolean}
 */
function isPlainObject(obj) {
  var proto = Object.getPrototypeOf(obj);
  return proto === null || proto.constructor === Object;
  /* && Object.prototype.toString.call(obj) === '[object Object]'*/
}

module.exports = isPlainObject;
},{}],12:[function(require,module,exports){
"use strict";

/**
 * isRegExp
 *
 * @since 1.0.0
 * @param regexp
 * @returns {boolean}
 */
function isRegExp(regexp) {
  return regexp instanceof RegExp;
}

module.exports = isRegExp;
},{}],13:[function(require,module,exports){
"use strict";

/**
 * isSafeInteger
 *
 * @since 1.0.0
 * @param num
 * @returns {boolean}
 */
require('js-polyfill/Number.isSafeInteger');

module.exports = Number.isSafeInteger;
},{"js-polyfill/Number.isSafeInteger":19}],14:[function(require,module,exports){
"use strict";

/**
 * isString
 *
 * @since 1.0.0
 * @param str
 * @returns {boolean}
 */
function isString(str) {
  // typeof val is faster than Object.prototype.toString.call(val)
  return typeof str === 'string';
}

module.exports = isString;
},{}],15:[function(require,module,exports){
/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
},{}],16:[function(require,module,exports){
/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 */
if (!Number.MAX_SAFE_INTEGER) {
    Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1; // 9007199254740991
}
},{}],17:[function(require,module,exports){
/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
if (!Number.isInteger) {
    Number.isInteger = function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
}
},{}],18:[function(require,module,exports){
/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */
if (!Number.isNaN) {
    Number.isNaN = function (value) {
        return typeof value === "number" && isNaN(value);
    };
}
},{}],19:[function(require,module,exports){
/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
 */
require('./Number.MAX_SAFE_INTEGER');
require('./Number.isInteger');

if (Number.isSafeInteger) {
    Number.isSafeInteger = function (value) {
        return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
    };
}
},{"./Number.MAX_SAFE_INTEGER":16,"./Number.isInteger":17}],20:[function(require,module,exports){
"use strict";

module.exports = function () {};
},{}],21:[function(require,module,exports){
"use strict";

var isArray = require('./isArray');

var isBoolean = require('./isBoolean');

var isFunction = require('./isFunction');

var isNull = require('./isNull');

var isNumber = require('./isNumber');

var isObject = require('./isObject');

var isRegExp = require('./isRegExp');

var isString = require('./isString');
/**
 * Get the type of a variable
 *
 * @since 1.0.0
 * @param val
 * @returns string null, number, string, boolean, object, array, function, regexp
 */


function type(val) {
  switch (true) {
    case isNull(val):
      return 'null';

    case isString(val):
      return 'string';

    case isNumber(val):
      return 'number';

    case isBoolean(val):
      return 'boolean';

    case isFunction(val):
      return 'function';

    case isArray(val):
      return 'array';

    case isRegExp(val):
      return 'regexp';

    case isObject(val):
    default:
      return 'object';
  }
}

module.exports = type;
},{"./isArray":2,"./isBoolean":3,"./isFunction":5,"./isNull":8,"./isNumber":9,"./isObject":10,"./isRegExp":12,"./isString":14}]},{},[1])(1)
});
