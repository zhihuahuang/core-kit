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
 * @since 0.1.0
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
      return 'object';

    default:
      return '';
  }
}

module.exports = type;