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