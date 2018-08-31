const type = require('./type');
const isArray = require('./isArray');
const isBoolean = require('./isBoolean');
const isFunction = require('./isFunction');
const isNull = require('./isNull');
const isNumber = require('./isNumber');
const isObject = require('./isObject');
const isRegExp = require('./isRegExp');
const isString = require('./isString');

const isBrowser = require('./isBrowser');

const _ = {
    /* Type */
    isArray,
    isBoolean,
    isFunction,
    isNull,
    isNumber,
    isObject,
    isRegExp,
    isString,
    type,

    /* Env */
    isBrowser
};

module.exports = _;