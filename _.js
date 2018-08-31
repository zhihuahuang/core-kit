"use strict";

var type = require('./type');

var isArray = require('./isArray');

var isBoolean = require('./isBoolean');

var isFunction = require('./isFunction');

var isNull = require('./isNull');

var isNumber = require('./isNumber');

var isObject = require('./isObject');

var isRegExp = require('./isRegExp');

var isString = require('./isString');

var isBrowser = require('./isBrowser');

var _ = {
  /* Type */
  isArray: isArray,
  isBoolean: isBoolean,
  isFunction: isFunction,
  isNull: isNull,
  isNumber: isNumber,
  isObject: isObject,
  isRegExp: isRegExp,
  isString: isString,
  type: type,

  /* Env */
  isBrowser: isBrowser
};
module.exports = _;