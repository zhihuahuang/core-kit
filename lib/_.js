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

const chunk = require('./chunk');
const compact = require('./compact');

const isBrowser = require('./isBrowser');

const identity = require('./identity');
const constant = require('./constant');
const noop = require('./noop');
const times = require('./times');

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

    /* Array */
    chunk,
    compact,

    /* Env */
    isBrowser,

    /* Util */
    identity,
    noop,
};

module.exports = _;