const type = require('./type');
const isArray = require('./isArray');
const isBoolean = require('./isBoolean');
const isFunction = require('./isFunction');
const isNull = require('./isNull');
const isNumber = require('./isNumber');
const isObject = require('./isObject');
const isPlainObject = require('./isPlainObject');
const isRegExp = require('./isRegExp');
const isString = require('./isString');

const isInteger = require('./isInteger');
const isNaN = require('./isNaN');
const isSafeInteger = require('./isSafeInteger');

const isBrowser = require('./isBrowser');

const noop = require('./noop');

const _ = {
    /* Type */
    isArray,
    isBoolean,
    isFunction,
    isNull,
    isNumber,
    isObject,
    isPlainObject,
    isRegExp,
    isString,
    type,

    /* Number Type */
    isInteger,
    isNaN,
    isSafeInteger,

    /* Env */
    isBrowser,

    /* Util */
    noop,
};

module.exports = _;